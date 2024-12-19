'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
// import { Doughnut } from 'react-chartjs-2'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// ChartJS.register(ArcElement, Tooltip, Legend)

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']

const topics = [
  'Descriptive Statistics',
  'Probability',
  'Inferential Statistics',
  'Regression Analysis',
  'Machine Learning',
  'Bayesian Statistics',
]

export default function Progress() {
  const [progress, setProgress] = useState(topics.map(() => Math.floor(Math.random() * 101)))

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: progress,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">My Progress</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Overall Progress</h2>
        <div className="w-full max-w-md mx-auto h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={topics.map((topic, index) => ({ name: topic, value: progress[index] }))}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {topics.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.LENGTH]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Topic Breakdown</h2>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div key={topic}>
              <div className="flex justify-between mb-1">
                <span>{topic}</span>
                <span>{progress[index]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Focus on improving your understanding of Bayesian Statistics</li>
          <li>Review the fundamentals of Descriptive Statistics</li>
          <li>Practice more problems in Regression Analysis</li>
        </ul>
      </div>
    </div>
  )
}

