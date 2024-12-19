'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ConditionalProbability() {
  const [totalStudents, setTotalStudents] = useState(100)
  const [mathStudents, setMathStudents] = useState(60)
  const [scienceStudents, setScienceStudents] = useState(50)
  const [bothStudents, setBothStudents] = useState(30)

  const calculateProbabilities = () => {
    const pMath = mathStudents / totalStudents
    const pScience = scienceStudents / totalStudents
    const pBoth = bothStudents / totalStudents
    const pMathGivenScience = bothStudents / scienceStudents
    const pScienceGivenMath = bothStudents / mathStudents

    return {
      pMath: pMath.toFixed(2),
      pScience: pScience.toFixed(2),
      pBoth: pBoth.toFixed(2),
      pMathGivenScience: pMathGivenScience.toFixed(2),
      pScienceGivenMath: pScienceGivenMath.toFixed(2),
    }
  }

  const probabilities = calculateProbabilities()

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/topics/probability" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Probability
        </Link>
        <h1 className="text-4xl font-bold">Conditional Probability</h1>
      </div>

      <p className="text-xl">
        Conditional probability is the probability of an event occurring given that another event has already occurred.
        It's often expressed as P(A|B), which reads as "the probability of A given B".
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Interactive Conditional Probability Calculator</h2>
        <p className="mb-4">Adjust the numbers to see how conditional probabilities change:</p>
        <div className="space-y-2 mb-4">
          <label className="block">
            Total Students:
            <input
              type="number"
              value={totalStudents}
              onChange={(e) => setTotalStudents(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
          <label className="block">
            Math Students:
            <input
              type="number"
              value={mathStudents}
              onChange={(e) => setMathStudents(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
          <label className="block">
            Science Students:
            <input
              type="number"
              value={scienceStudents}
              onChange={(e) => setScienceStudents(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
          <label className="block">
            Students in Both:
            <input
              type="number"
              value={bothStudents}
              onChange={(e) => setBothStudents(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="space-y-2">
          <p>P(Math): {probabilities.pMath}</p>
          <p>P(Science): {probabilities.pScience}</p>
          <p>P(Both): {probabilities.pBoth}</p>
          <p>P(Math|Science): {probabilities.pMathGivenScience}</p>
          <p>P(Science|Math): {probabilities.pScienceGivenMath}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conditional probability is denoted as P(A|B), read as "probability of A given B".</li>
          <li>The formula for conditional probability is: P(A|B) = P(A and B) / P(B)</li>
          <li>Two events are independent if P(A|B) = P(A), meaning B doesn't affect the probability of A.</li>
          <li>Bayes' theorem relates conditional probabilities: P(A|B) = P(B|A) * P(A) / P(B)</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>In a deck of 52 cards, what is the probability of drawing a king given that you've drawn a face card?</li>
          <li>If 60% of people like chocolate and 70% of chocolate lovers also like vanilla, what percentage of people like both chocolate and vanilla?</li>
          <li>A test for a disease is 95% accurate for positive results and 98% accurate for negative results. If 2% of the population has the disease, what is the probability that a person who tests positive actually has the disease?</li>
        </ol>
      </div>
    </div>
  )
}

