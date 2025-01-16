import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from './components/ui/navigation'
import Hero from './components/ui/Hero'
import Portfolio from './components/ui/Portfolio'
import Skills from './components/ui/Skills'
import Contact from './components/ui/Contact'
import Footer from './components/ui/footer'
import Journey from './components/ui/Journey'
import './App.css'

function App() {
  const [language, setLanguage] = useState('EN')
  const [activeSection, setActiveSection] = useState('hero')
  const mainRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    smooth: true
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    bounce: 0
  })

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'NL' : 'EN')
  }

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* Fixed background with gradient and pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-[0%] backdrop-blur-sm"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <Navigation 
        language={language} 
        onToggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />

      <main ref={mainRef} className="relative">
        {/* Hero section with full height and centered content */}
        <section id="hero" className="min-h-screen flex items-center justify-center py-20">
          <Hero language={language} />
        </section>

        {/* Skills section with background tint */}
        <section id="skills" className="py-20 bg-primary/5 backdrop-blur-sm">
          <Skills language={language} />
        </section>

        {/* Journey section */}
        <section id="journey" className="py-20">
          <Journey language={language} />
        </section>

        {/* Portfolio section with background tint */}
        <section id="portfolio" className="py-20 bg-accent/5 backdrop-blur-sm">
          <Portfolio language={language} />
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20">
          <Contact language={language} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
