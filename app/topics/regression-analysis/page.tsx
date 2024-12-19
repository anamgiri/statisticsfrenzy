import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function RegressionAnalysis() {
  const subTopics = [
    {
      name: 'Simple Linear Regression',
      description: 'Learn how to model the relationship between two variables using a straight line.',
      link: '/topics/regression-analysis/simple-linear-regression',
    },
    {
      name: 'Multiple Regression',
      description: 'Explore regression models with multiple independent variables.',
      link: '/topics/regression-analysis/multiple-regression',
    },
    {
      name: 'Logistic Regression',
      description: 'Understand how to model binary outcomes using logistic regression.',
      link: '/topics/regression-analysis/logistic-regression',
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
      <h1 className="text-4xl font-bold mb-4">Regression Analysis</h1>
      <p className="text-xl mb-8">
        Regression analysis is a set of statistical methods used for estimating relationships between variables. 
        It helps predict outcomes based on one or more predictor variables.
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
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Regression Analysis</h2>
        <div className="mermaid">
          {`
          graph TD;
            A["Regression Analysis"]-->B["Simple Linear Regression"]
            A-->C["Multiple Regression"]
            A-->D["Logistic Regression"]
            B-->E["One independent variable"]
            B-->F["Continuous outcome"]
            C-->G["Two or more independent variables"]
            C-->F
            D-->H["One or more independent variables"]
            D-->I["Binary outcome"]
          `}
        </div>
      </div>
    </div>
  )
}

