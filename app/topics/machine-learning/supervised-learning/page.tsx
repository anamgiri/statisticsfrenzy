'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

const generateData = (slope: number, intercept: number, noise: number) => {
  return Array.from({ length: 50 }, () => {
    const x = Math.random() * 100
    const y = slope * x + intercept + (Math.random() - 0.5) * noise
    return { x, y }
  })
}

export default function SupervisedLearning() {
  const [noise, setNoise] = useState(20)
  const data = generateData(0.5, 10, noise)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/machine-learning" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Machine Learning
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Supervised Learning</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Supervised learning is a type of machine learning where the algorithm learns from labeled training data to make predictions or decisions.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">How Supervised Learning Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li><strong>Data Collection:</strong> Gather a dataset with input features and corresponding output labels.</li>
          <li><strong>Data Preprocessing:</strong> Clean and prepare the data for training.</li>
          <li><strong>Model Selection:</strong> Choose an appropriate algorithm (e.g., linear regression, decision trees, neural networks).</li>
          <li><strong>Training:</strong> Feed the labeled data to the algorithm, allowing it to learn the relationships between inputs and outputs.</li>
          <li><strong>Evaluation:</strong> Test the model's performance on a separate set of labeled data.</li>
          <li><strong>Prediction:</strong> Use the trained model to make predictions on new, unseen data.</li>
        </ol>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Types of Supervised Learning</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Classification:</strong> Predicting a categorical label (e.g., spam detection, image recognition).</li>
          <li><strong>Regression:</strong> Predicting a continuous value (e.g., house prices, stock prices).</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Linear Regression Example</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          This chart demonstrates a simple linear regression model. Adjust the noise level to see how it affects the model's fit.
        </p>
        <div className="mb-4">
          <label htmlFor="noise" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
            Noise Level: {noise}
          </label>
          <input
            type="range"
            id="noise"
            name="noise"
            min="0"
            max="100"
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
          />
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" />
              <YAxis type="number" dataKey="y" name="Y" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Data" data={data} fill="#8884d8" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" dot={false} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Popular Supervised Learning Algorithms</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Linear Regression:</strong> For predicting continuous values based on linear relationships.</li>
          <li><strong>Logistic Regression:</strong> For binary classification problems.</li>
          <li><strong>Decision Trees:</strong> Tree-like models for both classification and regression tasks.</li>
          <li><strong>Random Forests:</strong> Ensemble of decision trees for improved accuracy and reduced overfitting.</li>
          <li><strong>Support Vector Machines (SVM):</strong> For classification and regression, especially effective in high-dimensional spaces.</li>
          <li><strong>Neural Networks:</strong> Deep learning models inspired by the human brain, capable of learning complex patterns.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Advantages and Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Advantages</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Clear evaluation metrics</li>
              <li>Works well with limited datasets</li>
              <li>Interpretable results (for some models)</li>
              <li>Suitable for many real-world problems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Requires labeled data, which can be expensive or time-consuming to obtain</li>
              <li>May not generalize well to unseen data (overfitting)</li>
              <li>Can be computationally expensive for large datasets</li>
              <li>May struggle with highly complex or non-linear relationships</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

