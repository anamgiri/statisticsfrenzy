'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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
  )
}

export default function BayesianInferencePage() {
  const [priorAlpha, setPriorAlpha] = useState(2)
  const [priorBeta, setPriorBeta] = useState(2)
  const [observations, setObservations] = useState({ successes: 7, failures: 3 })

  const posteriorAlpha = priorAlpha + observations.successes
  const posteriorBeta = priorBeta + observations.failures

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/bayesian-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Bayesian Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Bayesian Inference</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Bayesian inference is a method of statistical inference that uses Bayes' theorem to update the probability for a hypothesis as more evidence or information becomes available.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Prior Distribution:</strong> The initial belief about a parameter before observing data.</li>
          <li><strong>Likelihood:</strong> The probability of observing the data given a particular parameter value.</li>
          <li><strong>Posterior Distribution:</strong> The updated belief about a parameter after observing data.</li>
          <li><strong>Conjugate Priors:</strong> Prior distributions that result in a posterior distribution of the same family.</li>
          <li><strong>Credible Interval:</strong> A Bayesian alternative to confidence intervals, representing the range of plausible parameter values.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Beta-Binomial Model</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          This example demonstrates Bayesian inference using a Beta-Binomial model. The Beta distribution serves as a conjugate prior for the Binomial likelihood.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="priorAlpha" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Prior Alpha: {priorAlpha}
            </label>
            <input
              type="range"
              id="priorAlpha"
              min="1"
              max="20"
              step="1"
              value={priorAlpha}
              onChange={(e) => setPriorAlpha(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="priorBeta" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Prior Beta: {priorBeta}
            </label>
            <input
              type="range"
              id="priorBeta"
              min="1"
              max="20"
              step="1"
              value={priorBeta}
              onChange={(e) => setPriorBeta(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="successes" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Observed Successes: {observations.successes}
            </label>
            <input
              type="range"
              id="successes"
              min="0"
              max="20"
              step="1"
              value={observations.successes}
              onChange={(e) => setObservations({ ...observations, successes: parseInt(e.target.value) })}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="failures" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Observed Failures: {observations.failures}
            </label>
            <input
              type="range"
              id="failures"
              min="0"
              max="20"
              step="1"
              value={observations.failures}
              onChange={(e) => setObservations({ ...observations, failures: parseInt(e.target.value) })}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-200">Prior Distribution</h3>
          <BetaDistribution alpha={priorAlpha} beta={priorBeta} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-200">Posterior Distribution</h3>
          <BetaDistribution alpha={posteriorAlpha} beta={posteriorBeta} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">The Bayesian Inference Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Define the prior distribution:</strong> Represent initial beliefs about the parameter.</li>
          <li><strong>Collect data:</strong> Gather relevant observations or experimental results.</li>
          <li><strong>Calculate the likelihood:</strong> Determine the probability of the observed data given the parameter.</li>
          <li><strong>Apply Bayes' theorem:</strong> Combine the prior and likelihood to obtain the posterior distribution.</li>
          <li><strong>Analyze the posterior:</strong> Draw conclusions and make decisions based on the updated beliefs.</li>
        </ol>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Advantages of Bayesian Inference</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>Incorporates prior knowledge and uncertainty</li>
          <li>Provides a natural framework for sequential updating of beliefs</li>
          <li>Allows for probabilistic interpretation of results</li>
          <li>Handles small sample sizes well</li>
          <li>Useful for decision-making under uncertainty</li>
          <li>Can be applied to a wide range of problems and models</li>
        </ul>
      </div>
    </div>
  )
}

