'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function generateRandomData(n: number, b0: number, b1: number, b2: number, noise: number) {
  return Array.from({ length: n }, () => {
    const x1 = Math.random() * 10
    const x2 = Math.random() * 10
    const y = b0 + b1 * x1 + b2 * x2 + (Math.random() - 0.5) * noise
    return { x1, x2, y }
  })
}

export default function MultipleRegression() {
  const [sampleSize, setSampleSize] = useState(100)
  const [noise, setNoise] = useState(2)
  const [b0, setB0] = useState(1)
  const [b1, setB1] = useState(2)
  const [b2, setB2] = useState(3)

  const data = useMemo(() => {
    return generateRandomData(sampleSize, b0, b1, b2, noise)
  }, [sampleSize, noise, b0, b1, b2])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/regression-analysis" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Regression Analysis
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Multiple Regression</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Multiple regression extends simple linear regression to include two or more independent variables.
      </p>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Multiple Regression Simulator</h2>
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
            <label htmlFor="b1" className="block mb-2 text-purple-700 dark:text-purple-300">Coefficient 1 (β₁):</label>
            <input
              id="b1"
              type="number"
              value={b1}
              onChange={(e) => setB1(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              step="0.1"
            />
          </div>
          <div>
            <label htmlFor="b2" className="block mb-2 text-purple-700 dark:text-purple-300">Coefficient 2 (β₂):</label>
            <input
              id="b2"
              type="number"
              value={b2}
              onChange={(e) => setB2(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
              step="0.1"
            />
          </div>
        </div>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>True Equation:</strong> y = {b0} + {b1}x₁ + {b2}x₂ + ε</p>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x1" name="X₁" />
              <YAxis type="number" dataKey="y" name="Y" />
              <ZAxis type="number" dataKey="x2" name="X₂" range={[0, 1000]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Data" data={data} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Multiple Independent Variables:</strong> Allows for modeling complex relationships with multiple predictors.</li>
          <li><strong>Partial Regression Coefficients:</strong> Represent the effect of one variable while holding others constant.</li>
          <li><strong>Multicollinearity:</strong> High correlation between independent variables can affect the model's stability.</li>
          <li><strong>R-squared:</strong> Measures the proportion of variance in the dependent variable explained by the independent variables.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Simple Formula</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">The multiple regression equation:</p>
        <p className="text-center text-xl mb-4 text-purple-900 dark:text-purple-100">y = b₀ + b₁x₁ + b₂x₂ + ... + bₖxₖ</p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">Where:</p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>y is the dependent variable (what we're trying to predict)</li>
          <li>x₁, x₂, ..., xₖ are the independent variables (what we use to make the prediction)</li>
          <li>b₀ is the y-intercept (the value of y when all x's are 0)</li>
          <li>b₁, b₂, ..., bₖ are the coefficients for each independent variable</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>In a multiple regression model predicting house prices, the equation is: Price = 50,000 + 100(SquareFeet) + 5,000(Bedrooms). What would be the predicted price for a house with 1,500 square feet and 3 bedrooms?</li>
          <li>How does changing the coefficients (β₁ and β₂) affect the relationship between the variables? Experiment with the interactive simulator above.</li>
          <li>Explain why multicollinearity can be a problem in multiple regression and how it might affect the interpretation of the coefficients.</li>
        </ol>
      </div>
    </div>
  )
}

