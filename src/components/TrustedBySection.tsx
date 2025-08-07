'use client'

import { motion } from 'framer-motion'
import { Github, Zap, Code, ArrowRight, MessageSquare } from 'lucide-react'

export default function TrustedBySection() {
  const tools = [
    { name: 'GitHub', icon: Github },
    { name: 'Vercel', icon: Zap },
    { name: 'Netlify', icon: Code },
    { name: 'Linear', icon: ArrowRight },
    { name: 'Slack', icon: MessageSquare },
  ]

  return (
    <section className="py-20 border-y border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl mx-6 my-8">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 text-sm uppercase tracking-wider"
        >
          Built to work with your tools
        </motion.p>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center space-x-16 w-max"
          >
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ scale: 1.1, color: '#60A5FA' }}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-all whitespace-nowrap"
              >
                <tool.icon className="h-8 w-8" />
                <span className="font-medium text-xl">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
