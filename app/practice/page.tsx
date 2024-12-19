'use client'

import { useState } from 'react'
import { ArrowRight, Check, X } from 'lucide-react'

const problems = [
  {
    question: 'What is the mean of the following dataset: 4, 7, 2, 9, 3, 5, 8, 1, 6?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    explanation: 'The mean is calculated by summing all values (45) and dividing by the number of values (9), which equals 5.'
  },
  {
    question: 'Which measure of central tendency is most affected by extreme values?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctAnswer: 'Mean',
    explanation: 'The mean is most affected by extreme values because it takes into account every value in the dataset.'
  },
  {
    question: 'What is the probability of rolling a 6 on a fair six-sided die?',
    options: ['1/2', '1/3', '1/4', '1/6'],
    correctAnswer: '1/6',
    explanation: 'A fair six-sided die has an equal probability for each number. Since there are 6 possible outcomes, the probability of rolling any specific number is 1/6.'
  }
]

export default function Practice() {
  const [currentProblem, setCurrentProblem] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showExplanation, setShowExplanation] = useState(false)

  const handleSubmit = () => {
    setShowExplanation(true)
  }

  const nextProblem = () => {
    setCurrentProblem((prev) => (prev + 1) % problems.length)
    setSelectedAnswer('')
    setShowExplanation(false)
  }

  const problem = problems[currentProblem]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">Practice Problems</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Problem {currentProblem + 1}</h2>
        <p className="mb-4">{problem.question}</p>
        <div className="space-y-2">
          {problem.options.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="form-radio"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={!selectedAnswer}
        >
          Submit
        </button>
      </div>

      {showExplanation && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Explanation</h3>
          <p className="mb-4">{problem.explanation}</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Your answer:</span>
            <span className={selectedAnswer === problem.correctAnswer ? 'text-green-600' : 'text-red-600'}>
              {selectedAnswer}
            </span>
            {selectedAnswer === problem.correctAnswer ? (
              <Check className="text-green-600" size={20} />
            ) : (
              <X className="text-red-600" size={20} />
            )}
          </div>
          <div className="mt-2">
            <span className="font-semibold">Correct answer:</span> {problem.correctAnswer}
          </div>
          <button
            onClick={nextProblem}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
          >
            Next Problem <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

