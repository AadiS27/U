'use client'

import { Code, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const companyLinks = ['About', 'Blog', 'Changelog', 'Careers', 'Docs']
  const legalLinks = ['Privacy', 'Terms']

  return (
    <footer className="py-20 px-6 border-t border-white/10 bg-white/5 backdrop-blur-sm rounded-t-3xl mx-6 mt-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Dimension
              </span>
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Made by developers, for developers.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <nav className="space-y-4">
                {companyLinks.map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Legal</h4>
              <nav className="space-y-4">
                {legalLinks.map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025. Made by developers, for developers.</p>
        </div>
      </div>
    </footer>
  )
}
