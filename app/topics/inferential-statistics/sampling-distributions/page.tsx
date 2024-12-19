'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function normalDistribution(mean: number, stdDev: number, x: number) {
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}

export default function SamplingDistributions() {
  const [sampleSize, setSampleSize] = useState(30)
  const [numSamples, setNumSamples] = useState(1000)

  const chartData = useMemo(() => {
    const populationMean = 100
    const populationStdDev = 15
    const sampleMeans = []

    for (let i = 0; i < numSamples; i++) {
      let sampleSum = 0
      for (let j = 0; j < sampleSize; j++) {
        // Generate a random sample from the population
        sampleSum += populationMean + populationStdDev * (Math.random() + Math.random() + Math.random() - 1.5)
      }
      sampleMeans.push(sampleSum / sampleSize)
    }

    const min = Math.min(...sampleMeans)
    const max = Math.max(...sampleMeans)
    const range = max - min
    const numBins = 20
    const binWidth = range / numBins

    const bins = Array(numBins).fill(0)
    sampleMeans.forEach(mean => {
      const binIndex = Math.min(Math.floor((mean - min) / binWidth), numBins - 1)
      bins[binIndex]++
    })

    return bins.map((count, index) => ({
      x: min + (index + 0.5) * binWidth,
      y: count / numSamples / binWidth,
    }))
  }, [sampleSize, numSamples])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/inferential-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Inferential Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Sampling Distributions</h1>
      <p className="text-xl mb-8">
        Sampling distributions describe the distribution of a statistic (such as the sample mean) 
        calculated from repeated samples drawn from a population.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Sampling Distribution Simulator</h2>
        <div className="mb-4 space-y-4">
          <div>
            <label htmlFor="sampleSize" className="block mb-2">Sample Size:</label>
            <input
              id="sampleSize"
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="border rounded px-2 py-1"
              min="1"
              max="100"
            />
          </div>
          <div>
            <label htmlFor="numSamples" className="block mb-2">Number of Samples:</label>
            <input
              id="numSamples"
              type="number"
              value={numSamples}
              onChange={(e) => setNumSamples(Number(e.target.value))}
              className="border rounded px-2 py-1"
              min="100"
              max="10000"
            />
          </div>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="x" 
                label={{ value: 'Sample Mean', position: 'bottom', offset: -5 }}
              />
              <YAxis 
                label={{ value: 'Density', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: number) => value.toFixed(4)}
                labelFormatter={(label: number) => `Sample Mean: ${label.toFixed(2)}`}
              />
              <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Central Limit Theorem:</strong> As the sample size increases, the sampling distribution of the mean approaches a normal distribution, regardless of the population distribution.</li>
          <li><strong>Standard Error:</strong> The standard deviation of the sampling distribution, which decreases as sample size increases.</li>
          <li><strong>Sampling Variability:</strong> The variation in sample statistics from sample to sample.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>A population has a mean of 50 and a standard deviation of 10. What is the standard error of the mean for samples of size 25?</li>
          <li>Explain how the shape of the sampling distribution changes as the sample size increases.</li>
          <li>How does the Central Limit Theorem apply to non-normally distributed populations?</li>
        </ol>
      </div>
    </div>
  )
}

