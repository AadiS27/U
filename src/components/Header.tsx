'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code } from 'lucide-react'

export default function Header() {
  const { scrollY } = useScroll()
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const buttonSlideX = useTransform(scrollY, [0, 100], [100, 0])
  
  // Button center animation
  const buttonCenterX = useTransform(scrollY, [0, 500], [0, -300])
  const buttonScale = useTransform(scrollY, [0, 500], [1, 1.2])

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      <motion.div 
        style={{ opacity: headerOpacity }}
        className="container mx-auto px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <motion.div 
            style={{ scale: logoScale }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Dimension
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3">
            {['About', 'Careers', 'Blog', 'Changelog'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2, color: '#60A5FA' }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item}
                {item === 'Careers' && <span className="ml-1 text-xs bg-blue-500 text-white px-1 rounded">2</span>}
              </motion.a>
            ))}
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.div
              style={{
                x: buttonCenterX,
                scale: buttonScale,
              }}
              className="relative"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25">
                Join waitlist
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Morphed Navigation */}
      <motion.nav 
        style={{ opacity: navOpacity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8 bg-white/5 border border-white/10 rounded-full px-8 py-3"
      >
        {['About', 'Careers', 'Blog', 'Changelog'].map((item) => (
          <motion.a
            key={item}
            href="#"
            whileHover={{ y: -2, color: '#60A5FA' }}
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            {item}
            {item === 'Careers' && <span className="ml-1 text-xs bg-blue-500 text-white px-1 rounded">2</span>}
          </motion.a>
        ))}
        
        {/* Separator */}
        <div className="w-px h-6 bg-white/20"></div>
        
        {/* Join waitlist button */}
        <motion.div 
          style={{ x: buttonSlideX }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25 px-4 py-2 text-sm"
          >
            Join waitlist
          </Button>
        </motion.div>
      </motion.nav>
    </motion.header>
  )
}
