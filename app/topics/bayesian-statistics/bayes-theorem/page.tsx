'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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

const ProbabilityVisualization = ({ priorA, probBGivenA, probBGivenNotA }) => {
  const probA = priorA
  const probNotA = 1 - probA
  const probB = probBGivenA * probA + probBGivenNotA * probNotA
  const probAGivenB = (probBGivenA * probA) / probB

  const data = [
    { name: 'P(A)', value: probA },
    { name: 'P(not A)', value: probNotA },
    { name: 'P(B)', value: probB },
    { name: 'P(A|B)', value: probAGivenB },
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function BayesTheoremPage() {
  const [priorA, setPriorA] = useState(0.5)
  const [probBGivenA, setProbBGivenA] = useState(0.8)
  const [probBGivenNotA, setProbBGivenNotA] = useState(0.2)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/bayesian-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Bayesian Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Bayes' Theorem</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Bayes' Theorem is a fundamental concept in probability theory and statistics that describes the probability of an event based on prior knowledge of conditions that might be related to the event.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">The Formula</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Bayes' Theorem is expressed mathematically as:
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
        <ProbabilityVisualization priorA={priorA} probBGivenA={probBGivenA} probBGivenNotA={probBGivenNotA} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Example: Medical Testing</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Let's consider a medical test for a rare disease:
        </p>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300 mb-4">
          <li>1% of the population has the disease (P(A) = 0.01)</li>
          <li>The test is 95% accurate for those who have the disease (P(B|A) = 0.95)</li>
          <li>The test has a 10% false positive rate (P(B|not A) = 0.10)</li>
        </ul>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          If someone tests positive, what's the probability they actually have the disease?
        </p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          Using Bayes' Theorem:
        </p>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          P(A|B) = (0.95 * 0.01) / (0.95 * 0.01 + 0.10 * 0.99) ≈ 0.0873
        </p>
        <p className="text-purple-700 dark:text-purple-300">
          So, despite the positive test result, there's only about an 8.73% chance the person actually has the disease.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Applications of Bayes' Theorem</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>Medical diagnosis and screening</li>
          <li>Spam filtering in email systems</li>
          <li>Machine learning and artificial intelligence</li>
          <li>Legal reasoning and evidence evaluation</li>
          <li>Risk assessment in finance and insurance</li>
          <li>Weather forecasting</li>
        </ul>
      </div>
    </div>
  )
}

