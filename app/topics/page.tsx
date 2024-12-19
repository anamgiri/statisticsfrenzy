import Link from 'next/link'

const topics = [
  { 
    name: 'Descriptive Statistics', 
    subtopics: ['Measures of Central Tendency', 'Measures of Dispersion', 'Data Visualization'],
    link: '/topics/descriptive-statistics'
  },
  { 
    name: 'Probability', 
    subtopics: ['Basic Probability', 'Probability Distributions', 'Conditional Probability'],
    link: '/topics/probability'
  },
  { 
    name: 'Inferential Statistics', 
    subtopics: ['Sampling Distributions', 'Confidence Intervals', 'Hypothesis Testing'],
    link: '/topics/inferential-statistics'
  },
  { 
    name: 'Regression Analysis', 
    subtopics: ['Simple Linear Regression', 'Multiple Regression', 'Logistic Regression'],
    link: '/topics/regression-analysis'
  },
  { 
    name: 'Machine Learning', 
    subtopics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning'],
    link: '/topics/machine-learning'
  },
  { 
    name: 'Bayesian Statistics', 
    subtopics: ['Bayes Theorem', 'Bayesian Inference', 'Markov Chain Monte Carlo'],
    link: '/topics/bayesian-statistics'
  },
]

export default function Topics() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-900 dark:text-purple-100">Statistical Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div key={topic.name} className="border rounded-lg p-6 hover:shadow-lg transition duration-300 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/50 dark:to-violet-900/50">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
              <Link href={topic.link} className="text-purple-600 hover:text-violet-600 transition-colors">
                {topic.name}
              </Link>
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic}>
                  <Link href={`${topic.link}/${subtopic.toLowerCase().replace(/ /g, '-')}`} className="text-purple-600 hover:text-violet-600 transition-colors">
                    {subtopic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

