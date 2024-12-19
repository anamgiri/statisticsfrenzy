'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

function generateRandomData(n: number, b0: number, b1: number) {
  return Array.from({ length: n }, () => {
    const x = Math.random() * 10 - 5
    const p = 1 / (1 + Math.exp(-(b0 + b1 * x)))
    const y = Math.random() < p ? 1 : 0
    return { x, y }
  })
}

function sigmoid(x: number, b0: number, b1: number) {
  return 1 / (1 + Math.exp(-(b0 + b1 * x)))
}

export default function LogisticRegression() {
  const [sampleSize, setSampleSize] = useState(200)
  const [b0, setB0] = useState(-1)
  const [b1, setB1] = useState(1)

  const data = useMemo(() => {
    return generateRandomData(sampleSize, b0, b1)
  }, [sampleSize, b0, b1])

  const sigmoidCurve = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const x = (i / 99) * 10 - 5
      return { x, y: sigmoid(x, b0, b1) }
    })
  }, [b0, b1])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/regression-analysis" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Regression Analysis
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Logistic Regression</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Logistic regression models the probability of a binary outcome as a function of one or more predictor variables.
      </p>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Logistic Regression Simulator</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="sampleSize" className="block mb-2 text-purple-700 dark:text-purple-300">Sample Size:</label>
            <input
              id="sampleSize"
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              min="50"
              max="500"
            />
          </div>
          <div>
            <label htmlFor="b0" className="block mb-2 text-purple-700 dark:text-purple-300">Intercept (β₀):</label>
            <input
              id="b0"
              type="number"
              value={b0}
              onChange={(e) => setB0(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              step="0.1"
            />
          </div>
          <div>
            <label htmlFor="b1" className="block mb-2 text-purple-700 dark:text-purple-300">Coefficient (β₁):</label>
            <input
              id="b1"
              type="number"
              value={b1}
              onChange={(e) => setB1(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              step="0.1"
            />
          </div>
        </div>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>Logistic Function:</strong> p = 1 / (1 + e^(-({b0} + {b1}x)))</p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="x" name="X" domain={[-5, 5]} />
              <YAxis type="number" dataKey="y" name="Y" domain={[0, 1]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Data" data={data} fill="#8884d8" />
              <Line
                type="monotone"
                dataKey="y"
                data={sigmoidCurve}
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
          <li><strong>Binary Outcome:</strong> The dependent variable is categorical with two possible outcomes (e.g., yes/no, 1/0).</li>
          <li><strong>Odds:</strong> The ratio of the probability of success to the probability of failure.</li>
          <li><strong>Log-odds:</strong> The natural logarithm of the odds, which can be any real number.</li>
          <li><strong>Sigmoid Function:</strong> Transforms the linear predictor to a probability between 0 and 1.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Simple Formula</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">The logistic regression equation:</p>
        <p className="text-center text-xl mb-4 text-purple-900 dark:text-purple-100">p = 1 / (1 + e^(-z))</p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">Where:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>p is the probability of the outcome</li>
          <li>e is the base of natural logarithms (approximately 2.718)</li>
          <li>z = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ (the linear combination of predictors)</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>If z = -2 + 0.5x, calculate the probability when x = 4.</li>
          <li>In a logistic regression model predicting customer churn (1 = churn, 0 = no churn), the equation is: z = -2 + 0.5(Age) - 0.3(Satisfaction). What's the probability of churn for a 30-year-old customer with a satisfaction score of 7?</li>
          <li>How does changing the coefficient (β₁) affect the steepness of the sigmoid curve? Experiment with the interactive simulator above.</li>
        </ol>
      </div>
    </div>
  )
}

