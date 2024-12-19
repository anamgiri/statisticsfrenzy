import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function InferentialStatistics() {
  const subTopics = [
    {
      name: 'Sampling Distributions',
      description: 'Learn about the distribution of sample statistics and their properties.',
      link: '/topics/inferential-statistics/sampling-distributions',
    },
    {
      name: 'Confidence Intervals',
      description: 'Explore methods for estimating population parameters with a degree of certainty.',
      link: '/topics/inferential-statistics/confidence-intervals',
    },
    {
      name: 'Hypothesis Testing',
      description: 'Understand how to test claims about population parameters using sample data.',
      link: '/topics/inferential-statistics/hypothesis-testing',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/topics" className="text-purple-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Topics
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">Inferential Statistics</h1>
      <p className="text-xl mb-8">
        Inferential statistics uses sample data to make inferences about a larger population. 
        It allows us to draw conclusions and make predictions based on limited information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subTopics.map((subTopic) => (
          <div key={subTopic.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{subTopic.name}</h2>
            <p className="mb-4 text-gray-600">{subTopic.description}</p>
            <Link href={subTopic.link} className="text-purple-600 hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

