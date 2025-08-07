'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { ArrowRight, Code, MessageSquare, Zap, Bot, Github, Search, Command, Terminal, Rocket, CheckCircle, XCircle, Twitter, ExternalLink, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showCommandPalette, setShowCommandPalette] = useState(false)
  
  const { scrollY } = useScroll()
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const buttonSlideX = useTransform(scrollY, [0, 100], [100, 0])
  
  // Button center animation
  const buttonCenterX = useTransform(scrollY, [0, 500], [0, -300])
  const buttonScale = useTransform(scrollY, [0, 500], [1, 1.2])

  // Command palette keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowCommandPalette(true)
      }
      if (e.key === 'Escape') {
        setShowCommandPalette(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-purple-400/30 to-blue-400/30 blur-3xl"
        />
      </div>

      {/* Floating Dots Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Scroll-Aware Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 transition-all duration-300"
      >
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="container mx-auto px-6 py-4"
        >
          <div className="flex items-center justify-between"
          >
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

      {/* Hero Section */}
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

      {/* Trusted By Section */}
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
              {[
                { name: 'GitHub', icon: Github },
                { name: 'Vercel', icon: Zap },
                { name: 'Netlify', icon: Code },
                { name: 'Linear', icon: ArrowRight },
                { name: 'Slack', icon: MessageSquare },
                { name: 'GitHub', icon: Github },
                { name: 'Vercel', icon: Zap },
                { name: 'Netlify', icon: Code },
                { name: 'Linear', icon: ArrowRight },
                { name: 'Slack', icon: MessageSquare },
              ].map((tool, index) => (
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

      {/* Feature 1 - Chat + Code */}
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

      {/* Feature 2 - AI Debugging */}
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

      {/* Feature 3 - GitHub Integration + Deployments */}
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
                    {[
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
                    ].map((deploy, i) => (
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

      {/* Feature 4 - Command Palette */}
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
                      {[
                        { icon: '🚀', text: 'Deploy to production', desc: 'Deploy current branch to production', highlighted: true },
                        { icon: '🔍', text: 'Deploy to staging', desc: 'Deploy to staging environment' },
                        { icon: '📊', text: 'View deployment logs', desc: 'Open deployment analytics' },
                        { icon: '⚙️', text: 'Deployment settings', desc: 'Configure deployment options' }
                      ].map((cmd, i) => (
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

      {/* Second CTA Section */}
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

      {/* Footer */}
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
                  {['About', 'Blog', 'Changelog', 'Careers', 'Docs'].map((item) => (
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
                  {['Privacy', 'Terms'].map((item) => (
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

      {/* Command Palette Modal */}
      <AnimatePresence>
        {showCommandPalette && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowCommandPalette(false)}
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
                {[
                  { icon: '🚀', text: 'Deploy to production', desc: 'Deploy current branch to production' },
                  { icon: '🔍', text: 'Search code', desc: 'Search across all repositories' },
                  { icon: '🤖', text: 'Ask AI assistant', desc: 'Get help from AI assistant' },
                  { icon: '💬', text: 'Create channel', desc: 'Start a new team discussion' },
                  { icon: '📊', text: 'View analytics', desc: 'Open deployment analytics' },
                  { icon: '⚙️', text: 'Settings', desc: 'Open project settings' },
                  { icon: '👥', text: 'Invite team member', desc: 'Send invitation to join workspace' },
                  { icon: '📝', text: 'Create task', desc: 'Add new task to project board' }
                ].map((cmd, i) => (
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
    </div>
  )
}
