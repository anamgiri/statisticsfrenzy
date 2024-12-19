'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mlApplications = [
  { name: 'Computer Vision', value: 25 },
  { name: 'Natural Language Processing', value: 22 },
  { name: 'Recommendation Systems', value: 18 },
  { name: 'Speech Recognition', value: 15 },
  { name: 'Autonomous Vehicles', value: 12 },
  { name: 'Healthcare', value: 8 },
]

export default function MachineLearning() {
  const subTopics = [
    {
      name: 'Supervised Learning',
      description: 'Learn about algorithms that use labeled data to make predictions or decisions.',
      link: '/topics/machine-learning/supervised-learning',
    },
    {
      name: 'Unsupervised Learning',
      description: 'Explore methods for finding patterns and structures in unlabeled data.',
      link: '/topics/machine-learning/unsupervised-learning',
    },
    {
      name: 'Deep Learning',
      description: 'Discover neural networks and their applications in various domains.',
      link: '/topics/machine-learning/deep-learning',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Topics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Machine Learning</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Machine learning is a field of artificial intelligence that focuses on the development of algorithms 
        that can learn from and make predictions or decisions based on data.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">What is Machine Learning?</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Machine Learning is a subset of artificial intelligence that enables computers to learn and improve 
          from experience without being explicitly programmed. It focuses on developing algorithms that can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li>Analyze and interpret complex data</li>
          <li>Identify patterns and make predictions</li>
          <li>Adapt and improve performance over time</li>
          <li>Automate decision-making processes</li>
        </ul>
        <p className="text-purple-700 dark:text-purple-300">
          Machine Learning has revolutionized various industries and is the driving force behind many 
          modern technologies we use daily, from recommendation systems to voice assistants.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Applications of Machine Learning</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Machine Learning has a wide range of applications across various industries. Here are some of the most popular areas:
        </p>
        <div className="h-[300px] w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mlApplications}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis label={{ value: 'Popularity (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-purple-600 dark:text-purple-400 italic">
          Chart: Popular applications of Machine Learning and their relative popularity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {subTopics.map((subTopic) => (
          <div key={subTopic.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-purple-800 dark:text-purple-200">{subTopic.name}</h2>
            <p className="mb-4 text-purple-700 dark:text-purple-300">{subTopic.description}</p>
            <Link href={subTopic.link} className="text-purple-600 hover:text-violet-600 transition-colors">
              Learn more
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">The Machine Learning Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Data Collection:</strong> Gathering relevant data for the problem at hand.</li>
          <li><strong>Data Preprocessing:</strong> Cleaning and preparing the data for analysis.</li>
          <li><strong>Feature Selection/Engineering:</strong> Identifying the most important features in the data.</li>
          <li><strong>Model Selection:</strong> Choosing the appropriate algorithm for the task.</li>
          <li><strong>Training:</strong> Teaching the model using the prepared data.</li>
          <li><strong>Evaluation:</strong> Assessing the model's performance on new, unseen data.</li>
          <li><strong>Deployment:</strong> Implementing the model in a real-world environment.</li>
          <li><strong>Monitoring and Maintenance:</strong> Continuously monitoring and updating the model as needed.</li>
        </ol>
      </div>
    </div>
  )
}

