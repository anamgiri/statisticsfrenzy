import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">StatisticsFrenzy</h3>
            <p className="text-sm text-muted-foreground">
              An interactive learning platform for statistics and machine learning enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-purple-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-purple-600">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
              <li><Link href="/guides" className="hover:text-purple-600">Guides</Link></li>
              <li><Link href="/examples" className="hover:text-purple-600">Examples</Link></li>
              <li><Link href="/faq" className="hover:text-purple-600">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StatisticsFrenzy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

