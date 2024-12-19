'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const generateNeuralNetworkData = (layers: number, neurons: number) => {
  const data = []
  for (let i = 0; i < layers; i++) {
    const layerData = []
    for (let j = 0; j < neurons; j++) {
      layerData.push({
        x: i,
        y: j,
        value: Math.random(),
      })
    }
    data.push(...layerData)
  }
  return data
}

export default function DeepLearning() {
  const [layers, setLayers] = useState(4)
  const [neurons, setNeurons] = useState(5)
  const data = generateNeuralNetworkData(layers, neurons)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/machine-learning" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Machine Learning
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Deep Learning</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Deep Learning is a subset of machine learning that uses artificial neural networks with multiple layers to learn and make decisions.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">How Deep Learning Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li><strong>Data Input:</strong> Feed large amounts of data into the neural network.</li>
          <li><strong>Feature Extraction:</strong> The network automatically learns to extract relevant features from the data.</li>
          <li><strong>Hidden Layers:</strong> Multiple layers process the data, each learning more abstract representations.</li>
          <li><strong>Output:</strong> The final layer produces the desired output (e.g., classification, prediction).</li>
          <li><strong>Backpropagation:</strong> The network adjusts its weights based on the error between predicted and actual outputs.</li>
          <li><strong>Iteration:</strong> The process repeats many times to improve accuracy.</li>
        </ol>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Types of Neural Networks</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Feedforward Neural Networks:</strong> Basic networks where information flows in one direction.</li>
          <li><strong>Convolutional Neural Networks (CNNs):</strong> Specialized for processing grid-like data, such as images.</li>
          <li><strong>Recurrent Neural Networks (RNNs):</strong> Designed for sequential data, with loops to maintain information.</li>
          <li><strong>Long Short-Term Memory (LSTM):</strong> A type of RNN that can learn long-term dependencies.</li>
          <li><strong>Generative Adversarial Networks (GANs):</strong> Two networks that compete to generate new, synthetic instances of data.</li>
          <li><strong>Transformers:</strong> Models that use self-attention mechanisms, particularly effective for natural language processing.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Neural Network Visualization</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          This visualization represents a simple neural network. Adjust the number of layers and neurons to see how the network structure changes.
        </p>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="layers" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Number of Layers: {layers}
            </label>
            <input
              type="range"
              id="layers"
              name="layers"
              min="2"
              max="10"
              value={layers}
              onChange={(e) => setLayers(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="neurons" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Neurons per Layer: {neurons}
            </label>
            <input
              type="range"
              id="neurons"
              name="neurons"
              min="1"
              max="10"
              value={neurons}
              onChange={(e) => setNeurons(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" type="number" domain={[0, layers - 1]} />
              <YAxis dataKey="y" type="number" domain={[0, neurons - 1]} />
              <Tooltip />
              {data.map((entry, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey="value"
                  stroke={`hsl(${(entry.x / (layers - 1)) * 360}, 70%, 50%)`}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Applications of Deep Learning</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Computer Vision:</strong> Image classification, object detection, facial recognition</li>
          <li><strong>Natural Language Processing:</strong> Language translation, sentiment analysis, chatbots</li>
          <li><strong>Speech Recognition:</strong> Voice assistants, transcription services</li>
          <li><strong>Autonomous Vehicles:</strong> Self-driving cars, drones</li>
          <li><strong>Healthcare:</strong> Disease diagnosis, drug discovery, medical image analysis</li>
          <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
          <li><strong>Robotics:</strong> Motion planning, object manipulation</li>
          <li><strong>Gaming:</strong> AI opponents, procedural content generation</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Advantages and Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Advantages</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Ability to learn complex patterns</li>
              <li>Automatic feature extraction</li>
              <li>Scalability with large datasets</li>
              <li>Continuous improvement with more data</li>
              <li>Versatility across various domains</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Requires large amounts of data</li>
              <li>Computationally intensive</li>
              <li>Black box nature (lack of interpretability)</li>
              <li>Potential for overfitting</li>
              <li>Ethical concerns (bias, privacy)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

