'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ProbabilityDistributions() {
  const [mean, setMean] = useState(0)
  const [standardDeviation, setStandardDeviation] = useState(1)

  const generateNormalDistribution = (mean: number, stdDev: number) => {
    const data = []
    for (let x = mean - 4 * stdDev; x <= mean + 4 * stdDev; x += stdDev / 10) {
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
      data.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(4)) })
    }
    return data
  }

  const normalDistributionData = generateNormalDistribution(mean, standardDeviation)

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/topics/probability" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Probability
        </Link>
        <h1 className="text-4xl font-bold">Probability Distributions</h1>
      </div>

      <p className="text-xl">
        Probability distributions describe the likelihood of all possible outcomes in a probability experiment.
        They can be discrete (e.g., binomial) or continuous (e.g., normal).
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Normal Distribution Visualizer</h2>
        <div className="mb-4 space-y-2">
          <label className="block">
            Mean:
            <input
              type="number"
              value={mean}
              onChange={(e) => setMean(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
          <label className="block">
            Standard Deviation:
            <input
              type="number"
              value={standardDeviation}
              onChange={(e) => setStandardDeviation(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={normalDistributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Common Probability Distributions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Normal Distribution:</strong> Bell-shaped curve, symmetric around the mean.</li>
          <li><strong>Binomial Distribution:</strong> Discrete distribution for the number of successes in a fixed number of independent trials.</li>
          <li><strong>Poisson Distribution:</strong> Discrete distribution for the number of events in a fixed interval of time or space.</li>
          <li><strong>Exponential Distribution:</strong> Continuous distribution for the time between events in a Poisson process.</li>
          <li><strong>Uniform Distribution:</strong> All outcomes are equally likely within a given range.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>The heights of adults in a population follow a normal distribution with a mean of 170 cm and a standard deviation of 10 cm. What percentage of the population is taller than 180 cm?</li>
          <li>A fair coin is tossed 10 times. What is the probability of getting exactly 6 heads?</li>
          <li>On average, a shop receives 3 customers per hour. What is the probability that in a given hour, the shop will receive exactly 5 customers?</li>
        </ol>
      </div>
    </div>
  )
}

