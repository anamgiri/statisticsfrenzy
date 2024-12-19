'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function MeasuresOfDispersion() {
  const [data, setData] = useState<number[]>([4, 7, 2, 9, 3, 5, 8, 1, 6])
  const [newValue, setNewValue] = useState('')

  const { variance, standardDeviation, range, chartData } = useMemo(() => {
    if (data.length === 0) {
      return { variance: 0, standardDeviation: 0, range: 0, chartData: [] }
    }

    const mean = data.reduce((sum, value) => sum + value, 0) / data.length
    const variance = data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length
    const standardDeviation = Math.sqrt(variance)
    const range = Math.max(...data) - Math.min(...data)

    const chartData = data.map((value, index) => ({ name: `Value ${index + 1}`, value }))

    return { variance, standardDeviation, range, chartData }
  }, [data])

  const addValue = () => {
    const value = parseInt(newValue)
    if (!isNaN(value)) {
      setData(prevData => [...prevData, value])
      setNewValue('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/descriptive-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Descriptive Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Measures of Dispersion</h1>
      <p className="text-xl mb-8">
        Measures of dispersion describe the spread or variability of a dataset. 
        The main measures are variance, standard deviation, and range.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Data Visualization</h2>
        <div className="mb-4">
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="border rounded px-2 py-1 mr-2"
            placeholder="Enter a number"
          />
          <button
            onClick={addValue}
            className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
          >
            Add Value
          </button>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Calculated Measures</h2>
        <p><strong>Variance:</strong> {variance.toFixed(2)}</p>
        <p><strong>Standard Deviation:</strong> {standardDeviation.toFixed(2)}</p>
        <p><strong>Range:</strong> {range}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="mb-2"><strong>Variance:</strong> The average of the squared differences from the mean, measuring how far a set of numbers are spread out from their average value.</p>
        <p className="mb-2"><strong>Standard Deviation:</strong> The square root of the variance, providing a measure of dispersion in the same units as the original data.</p>
        <p className="mb-2"><strong>Range:</strong> The difference between the largest and smallest values in a dataset, giving a simple measure of spread.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Calculate the variance and standard deviation for the dataset: 2, 4, 4, 4, 5, 5, 7, 9</li>
          <li>A company's stock prices for the past 5 days were $45, $47, $46, $48, and $44. Calculate the range of the stock prices.</li>
          <li>Explain why the standard deviation is often preferred over variance when describing data dispersion.</li>
        </ol>
      </div>
    </div>
  )
}

