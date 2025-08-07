'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ChatFeature() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Collaborate like never before
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real-time code sharing and discussion. Share snippets, get feedback, 
              and solve problems together with your team.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400">Live collaboration</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
              {/* Chat Interface Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-semibold">Team Chat</span>
                  </div>
                  <div className="text-sm text-gray-400">3 members online</div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    T
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-white">Tejas</span>
                      <span className="text-xs text-gray-400">2:15 PM</span>
                    </div>
                    <p className="text-gray-300 mb-3">Hey team! Can you review this function?</p>
                    <div className="bg-[#0D0D0D] rounded-2xl p-4 font-mono text-sm border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-xs">utils/api.js</span>
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                          Copy
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">fetchUserData</span> = <span className="text-yellow-400">async</span> (userId) {'{'}</div>
                        <div>&nbsp;&nbsp;<span className="text-green-400">return</span> <span className="text-blue-400">await</span> api.get(`/users/${'{'}userId{'}'}`)</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-white">Ari</span>
                      <span className="text-xs text-gray-400">2:16 PM</span>
                    </div>
                    <p className="text-gray-300">Looks good! Consider adding error handling for network failures.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    L
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-white">Landon</span>
                      <span className="text-xs text-gray-400">now</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 'auto' }}
                      transition={{ duration: 1, delay: 1.3 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-2xl p-3 inline-block"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-gray-400 text-sm">typing...</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
