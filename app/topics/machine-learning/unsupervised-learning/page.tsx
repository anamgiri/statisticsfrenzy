'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const generateClusteredData = (numClusters: number, pointsPerCluster: number) => {
  const data = []
  for (let i = 0; i < numClusters; i++) {
    const centerX = Math.random() * 100
    const centerY = Math.random() * 100
    for (let j = 0; j < pointsPerCluster; j++) {
      const x = centerX + (Math.random() - 0.5) * 20
      const y = centerY + (Math.random() - 0.5) * 20
      data.push({ x, y, cluster: i })
    }
  }
  return data
}

export default function UnsupervisedLearning() {
  const [numClusters, setNumClusters] = useState(3)
  const data = generateClusteredData(numClusters, 50)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/machine-learning" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Machine Learning
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Unsupervised Learning</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Unsupervised learning is a type of machine learning where the algorithm learns patterns and structures from unlabeled data.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">How Unsupervised Learning Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li><strong>Data Collection:</strong> Gather a dataset without predefined labels or outcomes.</li>
          <li><strong>Data Preprocessing:</strong> Clean and prepare the data for analysis.</li>
          <li><strong>Algorithm Selection:</strong> Choose an appropriate unsupervised learning algorithm (e.g., clustering, dimensionality reduction).</li>
          <li><strong>Pattern Discovery:</strong> Apply the algorithm to identify inherent structures or patterns in the data.</li>
          <li><strong>Interpretation:</strong> Analyze and interpret the discovered patterns or structures.</li>
          <li><strong>Validation:</strong> Assess the quality and usefulness of the discovered patterns.</li>
        </ol>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Types of Unsupervised Learning</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Clustering:</strong> Grouping similar data points together (e.g., customer segmentation, image segmentation).</li>
          <li><strong>Dimensionality Reduction:</strong> Reducing the number of features while preserving important information (e.g., PCA, t-SNE).</li>
          <li><strong>Association Rules:</strong> Discovering interesting relations between variables (e.g., market basket analysis).</li>
          <li><strong>Anomaly Detection:</strong> Identifying unusual patterns or outliers in the data.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Clustering Example</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          This chart demonstrates a simple clustering scenario. Adjust the number of clusters to see how it affects the grouping of data points.
        </p>
        <div className="mb-4">
          <label htmlFor="clusters" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
            Number of Clusters: {numClusters}
          </label>
          <input
            type="range"
            id="clusters"
            name="clusters"
            min="2"
            max="6"
            value={numClusters}
            onChange={(e) => setNumClusters(Number(e.target.value))}
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
              <Scatter name="Clusters" data={data} fill={(entry) => `hsl(${entry.cluster * 360 / numClusters}, 70%, 50%)`} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Popular Unsupervised Learning Algorithms</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>K-means Clustering:</strong> Partitions data into K clusters based on similarity.</li>
          <li><strong>Hierarchical Clustering:</strong> Creates a tree of clusters, allowing for different levels of granularity.</li>
          <li><strong>DBSCAN:</strong> Density-based clustering that can find arbitrarily shaped clusters.</li>
          <li><strong>Principal Component Analysis (PCA):</strong> Reduces dimensionality by finding the most important features.</li>
          <li><strong>t-SNE:</strong> Visualizes high-dimensional data in 2D or 3D space.</li>
          <li><strong>Autoencoders:</strong> Neural networks that learn compressed representations of data.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Advantages and Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Advantages</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Can work with unlabeled data</li>
              <li>Discovers hidden patterns and structures</li>
              <li>Useful for exploratory data analysis</li>
              <li>Can handle high-dimensional data</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Results can be subjective and hard to interpret</li>
              <li>Difficult to evaluate the quality of results</li>
              <li>May discover irrelevant patterns</li>
              <li>Often requires domain expertise to interpret results effectively</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

