'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Terminal, CheckCircle, XCircle, ExternalLink } from 'lucide-react'

export default function DeploymentFeature() {
  const deployments = [
    { 
      status: 'success', 
      commit: 'feat: add user dashboard', 
      time: '2m ago', 
      url: 'dashboard-pr-123.preview.app',
      pr: '#123'
    },
    { 
      status: 'success', 
      commit: 'fix: resolve auth issue', 
      time: '1h ago', 
      url: 'auth-fix-pr-122.preview.app',
      pr: '#122'
    },
    { 
      status: 'building', 
      commit: 'update: new landing page', 
      time: 'now', 
      url: 'landing-pr-124.preview.app',
      pr: '#124'
    }
  ]

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
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
            >
              Instant preview environments
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ship faster with live environments and CI/CD triggers. 
              Every pull request gets its own deployment URL automatically.
            </p>
            <div className="flex items-center space-x-4">
              <Terminal className="h-6 w-6 text-teal-400" />
              <span className="text-gray-400">Real-time deployment logs</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Github className="h-6 w-6 text-gray-400" />
                    <span className="font-semibold">Deployments</span>
                  </div>
                  <div className="text-sm text-gray-400">main branch</div>
                </div>
                
                <div className="space-y-4">
                  {deployments.map((deploy, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-2xl p-4 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {deploy.status === 'success' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : deploy.status === 'building' ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="h-5 w-5 border-2 border-yellow-400 border-t-transparent rounded-full"
                            />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400" />
                          )}
                          <div>
                            <p className="text-sm text-white font-medium">{deploy.commit}</p>
                            <p className="text-xs text-gray-400">{deploy.time}</p>
                          </div>
                        </div>
                        <div className="text-xs text-blue-400">{deploy.pr}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <code className="text-xs text-gray-400 bg-black/20 px-2 py-1 rounded">
                          {deploy.url}
                        </code>
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
