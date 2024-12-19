'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function normalDistribution(mean: number, stdDev: number, x: number) {
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
}

export default function ConfidenceIntervals() {
  const [sampleMean, setSampleMean] = useState(100)
  const [sampleStdDev, setSampleStdDev] = useState(15)
  const [sampleSize, setSampleSize] = useState(30)
  const [confidenceLevel, setConfidenceLevel] = useState(95)

  const { lowerBound, upperBound, chartData } = useMemo(() => {
    const standardError = sampleStdDev / Math.sqrt(sampleSize)
    const zScore = (confidenceLevel === 99) ? 2.576 : (confidenceLevel === 95) ? 1.96 : 1.645
    const marginOfError = zScore * standardError

    const lowerBound = sampleMean - marginOfError
    const upperBound = sampleMean + marginOfError

    const chartData = []
    for (let x = sampleMean - 4 * standardError; x <= sampleMean + 4 * standardError; x += standardError / 10) {
      chartData.push({
        x,
        y: normalDistribution(sampleMean, standardError, x),
        inInterval: x >= lowerBound && x <= upperBound,
      })
    }

    return { lowerBound, upperBound, chartData }
  }, [sampleMean, sampleStdDev, sampleSize, confidenceLevel])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/inferential-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Inferential Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Confidence Intervals</h1>
      <p className="text-xl mb-8">
        Confidence intervals provide a range of values that is likely to contain the true population parameter 
        with a certain level of confidence.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Confidence Interval Calculator</h2>
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
            <label htmlFor="sampleStdDev" className="block mb-2">Sample Standard Deviation:</label>
            <input
              id="sampleStdDev"
              type="number"
              value={sampleStdDev}
              onChange={(e) => setSampleStdDev(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
              min="0"
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
            <label htmlFor="confidenceLevel" className="block mb-2">Confidence Level:</label>
            <select
              id="confidenceLevel"
              value={confidenceLevel}
              onChange={(e) => setConfidenceLevel(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            >
              <option value={90}>90%</option>
              <option value={95}>95%</option>
              <option value={99}>99%</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <p><strong>Confidence Interval:</strong> ({lowerBound.toFixed(2)}, {upperBound.toFixed(2)})</p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="x" 
                type="number" 
                label={{ value: 'Sample Mean', position: 'bottom', offset: -5 }}
              />
              <YAxis 
                dataKey="y" 
                type="number" 
                label={{ value: 'Density', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: number) => value.toFixed(4)}
                labelFormatter={(label: number) => `Sample Mean: ${label.toFixed(2)}`}
              />
              <Scatter
                data={chartData}
                fill={(entry) => entry.inInterval ? "#8884d8" : "#ccc"}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Confidence Level:</strong> The probability that the confidence interval contains the true population parameter.</li>
          <li><strong>Margin of Error:</strong> The range above and below the sample statistic that likely contains the true population parameter.</li>
          <li><strong>Standard Error:</strong> The standard deviation of the sampling distribution, which affects the width of the confidence interval.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>A sample of 50 students has a mean height of 170 cm with a standard deviation of 8 cm. Calculate a 95% confidence interval for the population mean height.</li>
          <li>How does increasing the confidence level affect the width of the confidence interval?</li>
          <li>Explain the relationship between sample size and the width of the confidence interval.</li>
        </ol>
      </div>
    </div>
  )
}

