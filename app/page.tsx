import Link from 'next/link'
import { ArrowRight, BarChart2, BookOpen, Brain } from 'lucide-react'
import dynamic from 'next/dynamic'

const DatePicker = dynamic(() => import('./components/DatePicker'), { ssr: false })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">
          Master Statistics with{' '}
          <span className="gradient-text">Interactive Learning</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
          StatisticsFrenzy makes learning statistics intuitive and fun through interactive
          visualizations, step-by-step solutions, and hands-on practice.
        </p>
        <Link 
          href="/topics" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          Start Learning
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-2xl p-6 border">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <BarChart2 className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Visualizations</h3>
            <p className="text-muted-foreground">
              Explore statistical concepts through dynamic, interactive charts and graphs.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 border">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Step-by-Step Solutions</h3>
            <p className="text-muted-foreground">
              Learn at your own pace with detailed explanations and guided problem-solving.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-6 border">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Brain className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practice Problems</h3>
            <p className="text-muted-foreground">
              Reinforce your understanding with varied difficulty levels and instant feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Descriptive Statistics', 'Probability', 'Hypothesis Testing'].map((topic) => (
            <div key={topic} className="group relative overflow-hidden rounded-2xl border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-semibold mb-2">{topic}</h3>
              <p className="text-muted-foreground mb-4">
                Learn the fundamentals and advanced concepts of {topic.toLowerCase()}.
              </p>
              <Link 
                href={`/topics/${topic.toLowerCase().replace(' ', '-')}`} 
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
              >
                Explore
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* DatePicker Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Date Picker Example</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DatePicker />
        </div>
      </section>
    </div>
  )
}

