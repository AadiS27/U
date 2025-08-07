'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const commands = [
    { icon: '🚀', text: 'Deploy to production', desc: 'Deploy current branch to production' },
    { icon: '🔍', text: 'Search code', desc: 'Search across all repositories' },
    { icon: '🤖', text: 'Ask AI assistant', desc: 'Get help from AI assistant' },
    { icon: '💬', text: 'Create channel', desc: 'Start a new team discussion' },
    { icon: '📊', text: 'View analytics', desc: 'Open deployment analytics' },
    { icon: '⚙️', text: 'Settings', desc: 'Open project settings' },
    { icon: '👥', text: 'Invite team member', desc: 'Send invitation to join workspace' },
    { icon: '📝', text: 'Create task', desc: 'Add new task to project board' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#0D0D0D] border border-white/20 rounded-3xl p-6 w-full max-w-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                autoFocus
              />
              <div className="flex items-center space-x-1 bg-white/10 rounded px-2 py-1 text-xs">
                <span>ESC</span>
              </div>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {commands.map((cmd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors"
                >
                  <span className="text-xl">{cmd.icon}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{cmd.text}</p>
                    <p className="text-sm text-gray-400">{cmd.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
