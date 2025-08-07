'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Bot, Sparkles } from 'lucide-react'

export default function AIFeature() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:order-first order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bot className="h-6 w-6 text-purple-400" />
                    <span className="font-semibold">AI Assistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Active</span>
                  </div>
                </div>
                
                <div className="bg-[#0D0D0D] rounded-2xl p-4 font-mono text-sm border border-white/10">
                  <div className="text-gray-500 mb-3">src/components/UserProfile.jsx</div>
                  <div className="space-y-1">
                    <div><span className="text-gray-500">15 |</span> <span className="text-white">const user = await fetchUser(userId);</span></div>
                    <motion.div
                      initial={{ backgroundColor: 'transparent' }}
                      whileInView={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="rounded px-2 -mx-2 relative"
                    >
                      <span className="text-gray-500">16 |</span> <span className="text-red-400">{'return user.profile.avatar.url;'}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      </motion.div>
                    </motion.div>
                    <div><span className="text-gray-500">17 |</span></div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-purple-300 font-medium mb-2">
                        AI Suggestion: Potential null reference error
                      </p>
                      <p className="text-sm text-gray-300 mb-4">
                        The code assumes user.profile.avatar exists. Add null checks to prevent runtime errors.
                      </p>
                      <div className="bg-[#0D0D0D] rounded-2xl p-3 font-mono text-sm border border-white/10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-green-400">return</span> user?.profile?.avatar?.url || <span className="text-yellow-400">&apos;/default-avatar.png&apos;</span>;
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 mt-3"
                      >
                        <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-xs">
                          Apply Fix
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                          Explain More
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:order-last">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
            >
              Your AI pair programmer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Let AI help you write, debug, and refactor code. Get intelligent suggestions, 
              catch errors before they happen, and learn best practices.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Bot className="h-6 w-6 text-purple-400" />
              <span className="text-gray-400">Powered by advanced language models</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
