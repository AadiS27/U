'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, MessageSquare, Rocket } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-teal-600/30"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto text-center relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
          >
            Powering the future of development workflows
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl mb-12 leading-relaxed"
          >
            Join thousands of developers who are building faster, collaborating better, 
            and shipping with confidence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 text-xl rounded-xl shadow-lg shadow-blue-500/25 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.4)',
                      '0 0 0 20px rgba(59, 130, 246, 0)',
                      '0 0 0 0 rgba(59, 130, 246, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
                Join waitlist
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 text-blue-400/20"
          >
            <Code className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 25, 0], 
              rotate: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/3 right-1/4 text-purple-400/20"
          >
            <MessageSquare className="h-12 w-12" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 15, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 left-1/3 text-teal-400/20"
          >
            <Rocket className="h-20 w-20" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
