'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError('Email is required')
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address')
    } else {
      setEmailError('')
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    validateEmail(email)
    if (!emailError && email) {
      // Handle successful submission
      console.log('Email submitted:', email)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <motion.span
              variants={itemVariants}
              className="block text-white"
            >
              The new standard
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
            >
              for developer
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              collaboration
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Chat, code, deploy, and accelerate with AI. All in one place.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="max-w-md mx-auto mb-8"
        >
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError('')
                }}
                className={`w-full bg-white/5 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 h-14 text-lg rounded-xl focus:ring-2 focus:ring-blue-400/50 ${
                  emailError ? 'border-red-400 focus:ring-red-400/50' : 'focus:border-blue-400'
                }`}
              />
              {emailError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 text-left"
                >
                  {emailError}
                </motion.p>
              )}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white h-14 text-lg rounded-xl shadow-lg shadow-blue-500/25 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.4)',
                      '0 0 0 10px rgba(59, 130, 246, 0)',
                      '0 0 0 0 rgba(59, 130, 246, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
                Join the waitlist
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
