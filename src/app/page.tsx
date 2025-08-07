'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import BackgroundEffects from '@/components/BackgroundEffects'
import HeroSection from '@/components/HeroSection'
import TrustedBySection from '@/components/TrustedBySection'
import ChatFeature from '@/components/ChatFeature'
import AIFeature from '@/components/AIFeature'
import DeploymentFeature from '@/components/DeploymentFeature'
import CommandPaletteFeature from '@/components/CommandPaletteFeature'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'

export default function LandingPage() {
  const [showCommandPalette, setShowCommandPalette] = useState(false)

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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      <BackgroundEffects />
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ChatFeature />
      <AIFeature />
      <DeploymentFeature />
      <CommandPaletteFeature />
      <CTASection />
      <Footer />
      <CommandPalette 
        isOpen={showCommandPalette} 
        onClose={() => setShowCommandPalette(false)} 
      />
    </div>
  )
}
