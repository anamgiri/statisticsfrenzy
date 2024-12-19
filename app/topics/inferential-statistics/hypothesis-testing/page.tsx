'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function normalDistribution(mean: number, stdDev: number, x: number) {
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}

export default function HypothesisTesting() {
  const [sampleMean, setSampleMean] = useState(52)
  const [sampleSize, setSampleSize] = useState(30)
  const [populationMean, setPopulationMean] = useState(50)
  const [populationStdDev, setPopulationStdDev] = useState(10)
  const [significanceLevel, setSignificanceLevel] = useState(0.05)

  const { zScore, pValue, reject, chartData } = useMemo(() => {
    const standardError = populationStdDev / Math.sqrt(sampleSize)
    const zScore = (sampleMean - populationMean) / standardError
    const pValue = 2 * (1 - Math.abs(zScore))
    const reject = pValue < significanceLevel

    const chartData = []
    for (let x = populationMean - 4 * standardError; x <= populationMean + 4 * standardError; x += standardError / 10) {
      chartData.push({
        x,
        y: normalDistribution(populationMean, standardError, x),
        inRejectionRegion: Math.abs(x - populationMean) / standardError > Math.abs(zScore),
      })
    }

    return { zScore, pValue, reject, chartData }
  }, [sampleMean, sampleSize, populationMean, populationStdDev, significanceLevel])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/inferential-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Inferential Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Hypothesis Testing</h1>
      <p className="text-xl mb-8">
        Hypothesis testing is a method for making decisions about population parameters based on sample data.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Hypothesis Test Calculator</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sampleMean" className="block mb-2">Sample Mean:</label>
            <input
              id="sampleMean"
              type="number"
              value={sampleMean}
              onChange={(e) => setSampleMean(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="sampleSize" className="block mb-2">Sample Size:</label>
            <input
              id="sampleSize"
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
              min="1"
            />
          </div>
          <div>
            <label htmlFor="populationMean" className="block mb-2">Population Mean (H0):</label>
            <input
              id="populationMean"
              type="number"
              value={populationMean}
              onChange={(e) => setPopulationMean(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="populationStdDev" className="block mb-2">Population Standard Deviation:</label>
            <input
              id="populationStdDev"
              type="number"
              value={populationStdDev}
              onChange={(e) => setPopulationStdDev(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="significanceLevel" className="block mb-2">Significance Level (α):</label>
            <select
              id="significanceLevel"
              value={significanceLevel}
              onChange={(e) => setSignificanceLevel(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            >
              <option value={0.01}>0.01</option>
              <option value={0.05}>0.05</option>
              <option value={0.1}>0.10</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <p><strong>Z-Score:</strong> {zScore.toFixed(4)}</p>
          <p><strong>P-Value:</strong> {pValue.toFixed(4)}</p>
          <p><strong>Decision:</strong> {reject ? "Reject" : "Fail to reject"} the null hypothesis</p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="x" 
                type="number" 
                label={{ value: 'Sample Mean', position: 'bottom', offset: -5 }}
              />
              <YAxis 
                label={{ value: 'Density', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: number) => value.toFixed(4)}
                labelFormatter={(label: number) => `Sample Mean: ${label.toFixed(2)}`}
              />
              <Area 
                type="monotone" 
                dataKey="y" 
                stroke="#8884d8" 
                fill={(entry) => entry.inRejectionRegion ? "#ff0000" : "#8884d8"}
                fillOpacity={0.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Null Hypothesis (H0):</strong> The assumption that there is no significant difference or effect.</li>
          <li><strong>Alternative Hypothesis (H1):</strong> The hypothesis that contradicts the null hypothesis.</li>
          <li><strong>Type I Error:</strong> Rejecting the null hypothesis when it is actually true (false positive).</li>
          <li><strong>Type II Error:</strong> Failing to reject the null hypothesis when it is actually false (false negative).</li>
          <li><strong>P-value:</strong> The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>A company claims that their new battery lasts 100 hours on average. A sample of 25 batteries has a mean life of 98 hours with a standard deviation of 5 hours. Test this claim at a 5% significance level.</li>
          <li>Explain the relationship between the significance level and the probability of making a Type I error.</li>
          <li>How does increasing the sample size affect the power of a hypothesis test?</li>
        </ol>
      </div>
    </div>
  )
}

