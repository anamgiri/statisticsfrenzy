'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function MeasuresOfCentralTendency() {
  const [data, setData] = useState<number[]>([4, 7, 2, 9, 3, 5, 8, 1, 6])
  const [newValue, setNewValue] = useState('')

  const { mean, median, mode, chartData } = useMemo(() => {
    if (data.length === 0) {
      return { mean: 0, median: 0, mode: 0, chartData: [] }
    }

    const sortedData = [...data].sort((a, b) => a - b)
    const mean = data.reduce((sum, value) => sum + value, 0) / data.length
    const median = sortedData[Math.floor(sortedData.length / 2)]
    const modeMap = new Map()
    let maxFreq = 0
    let mode = sortedData[0]

    for (const num of sortedData) {
      const freq = (modeMap.get(num) || 0) + 1
      modeMap.set(num, freq)
      if (freq > maxFreq) {
        maxFreq = freq
        mode = num
      }
    }

    const chartData = data.map((value, index) => ({ name: `Value ${index + 1}`, value }))

    return { mean, median, mode, chartData }
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
      <h1 className="text-4xl font-bold mb-4">Measures of Central Tendency</h1>
      <p className="text-xl mb-8">
        Measures of central tendency are values that represent the center or typical value of a dataset. 
        The three main measures are mean, median, and mode.
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
        <p><strong>Mean:</strong> {mean.toFixed(2)}</p>
        <p><strong>Median:</strong> {median}</p>
        <p><strong>Mode:</strong> {mode}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="mb-2"><strong>Mean:</strong> The average of all values, calculated by summing all values and dividing by the number of values.</p>
        <p className="mb-2"><strong>Median:</strong> The middle value when the data is sorted in ascending or descending order.</p>
        <p className="mb-2"><strong>Mode:</strong> The value that appears most frequently in the dataset.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Calculate the mean, median, and mode for the dataset: 3, 7, 5, 13, 20, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29</li>
          <li>In a class of 30 students, the average score on a test was 85. If two students' scores were accidentally omitted from the calculation, and those scores were 92 and 78, what is the true average score for the class?</li>
          <li>Explain a scenario where the median would be a more appropriate measure of central tendency than the mean.</li>
        </ol>
      </div>
    </div>
  )
}

