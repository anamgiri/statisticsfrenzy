import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DescriptiveStatistics() {
  const subTopics = [
    {
      name: 'Measures of Central Tendency',
      description: 'Learn about mean, median, and mode, and when to use each.',
      link: '/topics/descriptive-statistics/measures-of-central-tendency',
    },
    {
      name: 'Measures of Dispersion',
      description: 'Explore variance, standard deviation, and range to understand data spread.',
      link: '/topics/descriptive-statistics/measures-of-dispersion',
    },
    {
      name: 'Data Visualization',
      description: 'Discover various ways to visually represent data, including histograms and box plots.',
      link: '/topics/descriptive-statistics/data-visualization',
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
      <h1 className="text-4xl font-bold mb-4">Descriptive Statistics</h1>
      <p className="text-xl mb-8">
        Descriptive statistics involves methods for summarizing and describing the important characteristics of a dataset.
        It provides tools to present data in a meaningful way.
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

