'use client'

import { motion } from 'framer-motion'
import { Command, Search } from 'lucide-react'

export default function CommandPaletteFeature() {
  const commands = [
    { icon: '🚀', text: 'Deploy to production', desc: 'Deploy current branch to production', highlighted: true },
    { icon: '🔍', text: 'Deploy to staging', desc: 'Deploy to staging environment' },
    { icon: '📊', text: 'View deployment logs', desc: 'Open deployment analytics' },
    { icon: '⚙️', text: 'Deployment settings', desc: 'Configure deployment options' }
  ]

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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Command className="h-6 w-6 text-blue-400" />
                    <span className="font-semibold">Command Palette</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/10 rounded px-2 py-1 text-xs">
                    <Command className="h-3 w-3" />
                    <span>K</span>
                  </div>
                </div>
                
                <div className="bg-[#0D0D0D] rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-white/10">
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">deploy production</span>
                    <div className="ml-auto w-2 h-4 bg-blue-400 animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-2">
                    {commands.map((cmd, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-3 p-3 rounded-2xl cursor-pointer transition-colors ${
                          cmd.highlighted ? 'bg-blue-500/20 border border-blue-500/30' : 'hover:bg-white/5'
                        }`}
                      >
                        <span className="text-lg">{cmd.icon}</span>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${cmd.highlighted ? 'text-blue-300' : 'text-white'}`}>
                            {cmd.text}
                          </p>
                          <p className="text-xs text-gray-400">{cmd.desc}</p>
                        </div>
                        {cmd.highlighted && (
                          <div className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                            ↵
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:order-last">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Speed through your workflow
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Slash commands and shortcuts, just like your IDE. 
              Deploy, search, ask AI, or start conversations without breaking your flow.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-1 bg-white/10 rounded px-3 py-2">
                <Command className="h-4 w-4" />
                <span>K</span>
              </div>
              <span className="text-gray-400">Press to open command palette</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
