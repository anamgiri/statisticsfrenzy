import Link from 'next/link'
import { Home, Infinity, ActivityIcon as Function, Sigma } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          StatisticsFrenzy
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link 
            href="/topics" 
            className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
          >
            <Infinity size={20} />
            <span>Topics</span>
          </Link>
          <Link 
            href="/practice" 
            className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
          >
            <Function size={20} />
            <span>Practice</span>
          </Link>
          <Link 
            href="/formulas" 
            className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
          >
            <Sigma size={20} />
            <span>Formulas</span>
          </Link>
        </nav>

      </div>
    </header>
  )
}

