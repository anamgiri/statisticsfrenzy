'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BasicProbability() {
  const [numHeads, setNumHeads] = useState(0)
  const [numTails, setNumTails] = useState(0)

  const totalFlips = numHeads + numTails
  const headsProbability = totalFlips > 0 ? (numHeads / totalFlips).toFixed(2) : '0.00'
  const tailsProbability = totalFlips > 0 ? (numTails / totalFlips).toFixed(2) : '0.00'

  const flipCoin = () => {
    if (Math.random() < 0.5) {
      setNumHeads(numHeads + 1)
    } else {
      setNumTails(numTails + 1)
    }
  }

  const reset = () => {
    setNumHeads(0)
    setNumTails(0)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/topics/probability" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Probability
        </Link>
        <h1 className="text-4xl font-bold">Basic Probability</h1>
      </div>

      <p className="text-xl">
        Basic probability deals with the likelihood of an event occurring. It's often expressed as a number between 0 (impossible) and 1 (certain).
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Coin Flip Simulator</h2>
        <p className="mb-4">Click the button to flip a coin and see how probability works in practice!</p>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={flipCoin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Flip Coin
          </button>
          <button
            onClick={reset}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
        <div className="space-y-2">
          <p>Total flips: {totalFlips}</p>
          <p>Heads: {numHeads} (Probability: {headsProbability})</p>
          <p>Tails: {numTails} (Probability: {tailsProbability})</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Probability is always between 0 and 1 (or 0% and 100%).</li>
          <li>The sum of probabilities for all possible outcomes must equal 1 (or 100%).</li>
          <li>Independent events don't affect each other's probabilities.</li>
          <li>Mutually exclusive events cannot occur at the same time.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>A bag contains 3 red marbles, 4 blue marbles, and 5 green marbles. What is the probability of drawing a blue marble?</li>
          <li>If you roll a six-sided die, what is the probability of rolling an even number?</li>
          <li>In a standard deck of 52 cards, what is the probability of drawing a face card (Jack, Queen, or King)?</li>
        </ol>
      </div>
    </div>
  )
}

