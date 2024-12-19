'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MetropolisHastings = ({ iterations, burnIn, targetMean, targetStd }) => {
  const [samples, setSamples] = useState([])

  useEffect(() => {
    const runMCMC = () => {
      let x = 0
      const newSamples = []

      for (let i = 0; i < iterations; i++) {
        const proposal = x + (Math.random() - 0.5) * 2

        const currentPdf = Math.exp(-0.5 * Math.pow((x - targetMean) / targetStd, 2))
        const proposalPdf = Math.exp(-0.5 * Math.pow((proposal - targetMean) / targetStd, 2))

        const acceptanceProbability = Math.min(1, proposalPdf / currentPdf)

        if (Math.random() < acceptanceProbability) {
          x = proposal
        }

        if (i >= burnIn) {
          newSamples.push({ x, y: Math.random() * 0.1 })
        }
      }

      setSamples(newSamples)
    }

    runMCMC()
  }, [iterations, burnIn, targetMean, targetStd])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="x" />
          <YAxis type="number" dataKey="y" name="y" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Samples" data={samples} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function MarkovChainMonteCarloPage() {
  const [iterations, setIterations] = useState(10000)
  const [burnIn, setBurnIn] = useState(1000)
  const [targetMean, setTargetMean] = useState(0)
  const [targetStd, setTargetStd] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics/bayesian-statistics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Bayesian Statistics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Markov Chain Monte Carlo (MCMC)</h1>
      <p className="text-xl mb-8 text-purple-800 dark:text-purple-200">
        Markov Chain Monte Carlo (MCMC) is a class of algorithms for sampling from probability distributions, particularly useful in Bayesian inference for complex models.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Markov Chain:</strong> A sequence of random variables where each depends only on the previous one.</li>
          <li><strong>Monte Carlo:</strong> Methods that rely on repeated random sampling to obtain numerical results.</li>
          <li><strong>Stationary Distribution:</strong> The long-run distribution of the Markov chain.</li>
          <li><strong>Burn-in Period:</strong> Initial samples discarded to allow the chain to converge to the stationary distribution.</li>
          <li><strong>Proposal Distribution:</strong> Used to generate candidate moves in the Markov chain.</li>
          <li><strong>Acceptance Probability:</strong> Determines whether to accept or reject proposed moves.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Interactive Metropolis-Hastings Algorithm</h2>
        <p className="mb-4 text-purple-700 dark:text-purple-300">
          This example demonstrates the Metropolis-Hastings algorithm, a popular MCMC method, sampling from a normal distribution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="iterations" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Iterations: {iterations}
            </label>
            <input
              type="range"
              id="iterations"
              min="1000"
              max="50000"
              step="1000"
              value={iterations}
              onChange={(e) => setIterations(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="burnIn" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Burn-in: {burnIn}
            </label>
            <input
              type="range"
              id="burnIn"
              min="0"
              max="5000"
              step="100"
              value={burnIn}
              onChange={(e) => setBurnIn(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="targetMean" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Target Mean: {targetMean}
            </label>
            <input
              type="range"
              id="targetMean"
              min="-5"
              max="5"
              step="0.1"
              value={targetMean}
              onChange={(e) => setTargetMean(parseFloat(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
          <div>
            <label htmlFor="targetStd" className="block text-sm font-medium text-purple-700 dark:text-purple-300">
              Target Standard Deviation: {targetStd}
            </label>
            <input
              type="range"
              id="targetStd"
              min="0.1"
              max="5"
              step="0.1"
              value={targetStd}
              onChange={(e) => setTargetStd(parseFloat(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
            />
          </div>
        </div>
        <MetropolisHastings iterations={iterations} burnIn={burnIn} targetMean={targetMean} targetStd={targetStd} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Common MCMC Algorithms</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li><strong>Metropolis-Hastings:</strong> A general MCMC method that can sample from any probability distribution.</li>
          <li><strong>Gibbs Sampling:</strong> Samples each variable conditionally on the others, useful for high-dimensional problems.</li>
          <li><strong>Hamiltonian Monte Carlo:</strong> Uses gradient information to propose more efficient moves, particularly effective for high-dimensional continuous distributions.</li>
          <li><strong>Slice Sampling:</strong> An adaptive method that adjusts the step size automatically.</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">Applications of MCMC in Bayesian Statistics</h2>
        <ul className="list-disc list-inside space-y-2 text-purple-700 dark:text-purple-300">
          <li>Estimating posterior distributions for complex models</li>
          <li>Hierarchical Bayesian models</li>
          <li>Bayesian model selection and averaging</li>
          <li>Bayesian neural networks</li>
          <li>Phylogenetic inference in evolutionary biology</li>
          <li>Spatial statistics and image analysis</li>
          <li>Financial modeling and risk assessment</li>
          <li>Climate modeling and weather prediction</li>
        </ul>
      </div>
    </div>
  )
}

