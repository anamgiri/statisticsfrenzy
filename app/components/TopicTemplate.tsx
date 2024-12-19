import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface SubTopic {
  name: string
  description: string
  link: string
}

interface TopicTemplateProps {
  title: string
  description: string
  subTopics: SubTopic[]
}

export default function TopicTemplate({ title, description, subTopics }: TopicTemplateProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/topics" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Topics
        </Link>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      
      <p className="text-xl">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subTopics.map((subTopic) => (
          <div key={subTopic.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{subTopic.name}</h2>
            <p className="mb-4">{subTopic.description}</p>
            <Link href={subTopic.link} className="text-blue-600 hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

