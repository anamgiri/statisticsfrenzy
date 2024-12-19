'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function DataVisualization() {
  const [data] = useState([
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 300 },
    { name: 'D', value: 200 },
    { name: 'E', value: 278 },
    { name: 'F', value: 189 },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/descriptive-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Descriptive Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Data Visualization</h1>
      <p className="text-xl mb-8">
        Data visualization is the graphical representation of information and data. It helps to communicate complex data relationships and data-driven insights in a visual way.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Data Visualization</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Bar Charts:</strong> Used to compare quantities across different categories.</li>
          <li><strong>Line Charts:</strong> Show trends over time or how one variable changes in relation to another.</li>
          <li><strong>Pie Charts:</strong> Illustrate proportions and percentages of a whole.</li>
          <li><strong>Scatter Plots:</strong> Display the relationship between two variables.</li>
          <li><strong>Histograms:</strong> Show the distribution of a continuous variable.</li>
          <li><strong>Box Plots:</strong> Summarize the distribution of a dataset, showing median, quartiles, and outliers.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Choose the right type of visualization for your data and message.</li>
          <li>Keep it simple and avoid cluttering the visualization with unnecessary elements.</li>
          <li>Use color effectively to highlight important information or distinguish between categories.</li>
          <li>Provide clear labels and legends to ensure the visualization is easily understood.</li>
          <li>Be mindful of scale and proportion to avoid misrepresenting the data.</li>
        </ol>
      </div>
    </div>
  )
}

