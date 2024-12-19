'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const BayesTheorem = ({ priorA, probBGivenA, probBGivenNotA }) => {
  const probA = priorA
  const probNotA = 1 - probA
  const probB = probBGivenA * probA + probBGivenNotA * probNotA
  const probAGivenB = (probBGivenA * probA) / probB

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Bayes' Theorem Calculator</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-purple-700 dark:text-purple-300">P(A) = {probA.toFixed(4)}</p>
          <p className="text-purple-700 dark:text-purple-300">P(B|A) = {probBGivenA.toFixed(4)}</p>
          <p className="text-purple-700 dark:text-purple-300">P(B|not A) = {probBGivenNotA.toFixed(4)}</p>
        </div>
        <div>
          <p className="text-purple-700 dark:text-purple-300">P(not A) = {probNotA.toFixed(4)}</p>
          <p className="text-purple-700 dark:text-purple-300">P(B) = {probB.toFixed(4)}</p>
          <p className="text-purple-700 dark:text-purple-300">P(A|B) = {probAGivenB.toFixed(4)}</p>
        </div>
      </div>
      <p className="text-purple-700 dark:text-purple-300">
        Posterior probability P(A|B) = {(probAGivenB * 100).toFixed(2)}%
      </p>
    </div>
  )
}

const PriorPosteriorVisualization = ({ priorData, posteriorData }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Prior vs Posterior Visualization</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...priorData, ...posteriorData]} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 1]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" name="Probability" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const BetaDistribution = ({ alpha, beta }) => {
  const generateBetaData = (a, b) => {
    const data = []
    for (let x = 0; x <= 1; x += 0.01) {
      const y = Math.pow(x, a - 1) * Math.pow(1 - x, b - 1)
      data.push({ x, y })
    }
    return data
  }

  const data = generateBetaData(alpha, beta)

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Beta Distribution Visualization</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" domain={[0, 1]} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-purple-700 dark:text-purple-300 mt-4">
        Beta distribution with α = {alpha} and β = {beta}
      </p>
    </div>
  )
}

export default function BayesianStatistics() {
  const [priorA, setPriorA] = useState(0.5)
  const [probBGivenA, setProbBGivenA] = useState(0.8)
  const [probBGivenNotA, setProbBGivenNotA] = useState(0.2)
  const [alpha, setAlpha] = useState(2)
  const [beta, setBeta] = useState(5)

  const subTopics = [
    {
      name: 'Bayes Theorem',
      description: 'Learn the fundamental theorem of Bayesian statistics and its applications.',
      link: '/topics/bayesian-statistics/bayes-theorem',
    },
    {
      name: 'Bayesian Inference',
      description: 'Explore how to update probabilities based on new evidence.',
      link: '/topics/bayesian-statistics/bayesian-inference',
    },
    {
      name: 'Markov Chain Monte Carlo',
      description: 'Understand advanced sampling methods used in Bayesian statistics.',
      link: '/topics/bayesian-statistics/markov-chain-monte-carlo',
    },
  ]

  const priorData = [{ name: 'Prior P(A)', value: priorA }]
  const posteriorData = [{ name: 'Posterior P(A|B)', value: (probBGivenA * priorA) / (probBGivenA * priorA + probBGivenNotA * (1 - priorA)) }]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Topics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Bayesian Statistics</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Bayesian statistics is an approach to data analysis that allows for the incorporation of prior knowledge 
        and the updating of probabilities as new information becomes available.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Key Concepts in Bayesian Statistics</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Prior Probability:</strong> The initial belief about a parameter before observing data.</li>
          <li><strong>Likelihood:</strong> The probability of observing the data given a particular parameter value.</li>
          <li><strong>Posterior Probability:</strong> The updated belief about a parameter after observing data.</li>
          <li><strong>Bayes' Theorem:</strong> The mathematical formula for updating probabilities based on new evidence.</li>
          <li><strong>Credible Interval:</strong> A Bayesian alternative to confidence intervals, representing the range of plausible parameter values.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Bayes' Theorem</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Bayes' Theorem is the foundation of Bayesian statistics. It's expressed as:
        </p>
        <p className="text-center text-xl mb-4 text-purple-900 dark:text-purple-100">
          P(A|B) = (P(B|A) * P(A)) / P(B)
        </p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Where:
        </p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>P(A|B) is the posterior probability of A given B</li>
          <li>P(B|A) is the likelihood of B given A</li>
          <li>P(A) is the prior probability of A</li>
          <li>P(B) is the marginal likelihood of B</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Bayes' Theorem Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="priorA" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Prior P(A): {priorA.toFixed(2)}
            </label>
            <input
              type="range"
              id="priorA"
              min="0"
              max="1"
              step="0.01"
              value={priorA}
              onChange={(e) => setPriorA(parseFloat(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="probBGivenA" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              P(B|A): {probBGivenA.toFixed(2)}
            </label>
            <input
              type="range"
              id="probBGivenA"
              min="0"
              max="1"
              step="0.01"
              value={probBGivenA}
              onChange={(e) => setProbBGivenA(parseFloat(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="probBGivenNotA" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              P(B|not A): {probBGivenNotA.toFixed(2)}
            </label>
            <input
              type="range"
              id="probBGivenNotA"
              min="0"
              max="1"
              step="0.01"
              value={probBGivenNotA}
              onChange={(e) => setProbBGivenNotA(parseFloat(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <BayesTheorem priorA={priorA} probBGivenA={probBGivenA} probBGivenNotA={probBGivenNotA} />
      </div>

      <PriorPosteriorVisualization priorData={priorData} posteriorData={posteriorData} />

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Beta Distribution</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          The Beta distribution is commonly used as a prior distribution for probabilities in Bayesian statistics. 
          It's defined by two shape parameters, α (alpha) and β (beta).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="alpha" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              α (alpha): {alpha}
            </label>
            <input
              type="range"
              id="alpha"
              min="1"
              max="20"
              step="1"
              value={alpha}
              onChange={(e) => setAlpha(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="beta" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              β (beta): {beta}
            </label>
            <input
              type="range"
              id="beta"
              min="1"
              max="20"
              step="1"
              value={beta}
              onChange={(e) => setBeta(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <BetaDistribution alpha={alpha} beta={beta} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Sample Problem: Medical Test</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          A medical test for a rare disease has the following properties:
        </p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li>1% of the population has the disease (prior probability)</li>
          <li>The test correctly identifies 95% of people with the disease (sensitivity)</li>
          <li>The test correctly identifies 90% of people without the disease (specificity)</li>
        </ul>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          If a person tests positive, what is the probability that they actually have the disease?
        </p>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>Step 1:</strong> Define the events</p>
          <ul className="list-disc list-inside ml-4">
            <li>A: Person has the disease</li>
            <li>B: Person tests positive</li>
          </ul>
        </div>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>Step 2:</strong> Identify the given probabilities</p>
          <ul className="list-disc list-inside ml-4">
            <li>P(A) = 0.01 (prior probability)</li>
            <li>P(B|A) = 0.95 (sensitivity)</li>
            <li>P(B|not A) = 1 - 0.90 = 0.10 (1 - specificity)</li>
          </ul>
        </div>
        <div className="mb-4 text-purple-700 dark:text-purple-300">
          <p><strong>Step 3:</strong> Apply Bayes' Theorem</p>
          <p>P(A|B) = (P(B|A) * P(A)) / (P(B|A) * P(A) + P(B|not A) * P(not A))</p>
          <p>P(A|B) = (0.95 * 0.01) / (0.95 * 0.01 + 0.10 * 0.99)</p>
          <p>P(A|B) ≈ 0.0873 or about 8.73%</p>
        </div>
        <p className="text-purple-700 dark:text-purple-300">
          Therefore, if a person tests positive, there is only about an 8.73% chance that they actually have the disease. 
          This demonstrates how Bayesian reasoning can lead to counterintuitive results and why it's important to consider 
          both the prior probability and the test characteristics.
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
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Advantages and Challenges of Bayesian Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Advantages</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Incorporates prior knowledge</li>
              <li>Provides a natural framework for updating beliefs</li>
              <li>Handles small sample sizes well</li>
              <li>Offers intuitive probabilistic interpretations</li>
              <li>Useful for decision-making under uncertainty</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
              <li>Choosing appropriate prior distributions</li>
              <li>Computational complexity for complex models</li>
              <li>Potential sensitivity to prior choices</li>
              <li>Requires careful interpretation of results</li>
              <li>May be less familiar to some practitioners</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

