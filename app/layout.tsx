import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Statistics Frenzy',
  description: 'Interactive learning platform for statistics and machine learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900 dark:to-violet-900`}>
        <Header />
        <main className="min-h-screen pt-20 section-padding">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

