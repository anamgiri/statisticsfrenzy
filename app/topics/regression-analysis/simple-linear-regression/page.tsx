'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

function generateRandomData(n: number, slope: number, intercept: number, noise: number) {
  return Array.from({ length: n }, () => {
    const x = Math.random() * 10
    const y = slope * x + intercept + (Math.random() - 0.5) * noise
    return { x, y }
  })
}

function calculateRegression(data: { x: number; y: number }[]) {
  const n = data.length
  const sumX = data.reduce((sum, point) => sum + point.x, 0)
  const sumY = data.reduce((sum, point) => sum + point.y, 0)
  const sumXY = data.reduce((sum, point) => sum + point.x * point.y, 0)
  const sumX2 = data.reduce((sum, point) => sum + point.x * point.x, 0)

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)
  const intercept = (sumY - slope * sumX) / n

  return { slope, intercept }
}

export default function SimpleLinearRegression() {
  const [sampleSize, setSampleSize] = useState(50)
  const [noise, setNoise] = useState(2)

  const { data, slope, intercept } = useMemo(() => {
    const trueSlope = 2
    const trueIntercept = 1
    const data = generateRandomData(sampleSize, trueSlope, trueIntercept, noise)
    const { slope, intercept } = calculateRegression(data)
    return { data, slope, intercept }
  }, [sampleSize, noise])

  const regressionLine = [
    { x: 0, y: intercept },
    { x: 10, y: 10 * slope + intercept },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/regression-analysis" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Regression Analysis
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Simple Linear Regression</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Simple linear regression models the relationship between two variables using a linear equation.
      </p>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Linear Regression Simulator</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sampleSize" className="block mb-2 text-purple-700 dark:text-purple-300">Sample Size:</label>
            <input
              id="sampleSize"
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              min="10"
              max="200"
            />
          </div>
          <div>
            <label htmlFor="noise" className="block mb-2 text-purple-700 dark:text-purple-300">Noise Level:</label>
            <input
              id="noise"
              type="number"
              value={noise}
              onChange={(e) => setNoise(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              min="0"
              max="10"
              step="0.1"
            />
          </div>
        </div>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>Estimated Equation:</strong> y = {slope.toFixed(2)}x + {intercept.toFixed(2)}</p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" />
              <YAxis type="number" dataKey="y" name="Y" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Data" data={data} fill="#8884d8" />
              <Line
                type="monotone"
                dataKey="y"
                data={regressionLine}
                stroke="#ff7300"
                strokeWidth={2}
                dot={false}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Linear Relationship:</strong> The relationship between variables can be represented by a straight line.</li>
          <li><strong>Slope:</strong> Represents the change in Y for a one-unit change in X.</li>
          <li><strong>Intercept:</strong> The Y-value when X is zero.</li>
          <li><strong>Least Squares Method:</strong> Minimizes the sum of squared residuals to find the best-fitting line.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Simple Formula</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">The simple linear regression equation:</p>
        <p className="text-center text-xl mb-4 text-purple-900 dark:text-purple-100">y = mx + b</p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">Where:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>y is the dependent variable (what we're trying to predict)</li>
          <li>x is the independent variable (what we use to make the prediction)</li>
          <li>m is the slope of the line (how much y changes when x changes by 1 unit)</li>
          <li>b is the y-intercept (the value of y when x is 0)</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>Given the data points (1, 2), (2, 4), (3, 5), and (4, 8), calculate the slope and intercept of the regression line.</li>
          <li>If a regression line has a slope of 0.5 and an intercept of 2, what would be the predicted y-value when x is 6?</li>
          <li>How does increasing the noise level affect the fit of the regression line? Experiment with the interactive simulator above.</li>
        </ol>
      </div>
    </div>
  )
}

