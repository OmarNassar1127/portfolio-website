import { useEffect, useState } from 'react'
import Navigation from './components/ui/navigation'
import Hero from './components/ui/Hero'
import Portfolio from './components/ui/Portfolio'
import Skills from './components/ui/Skills'
import Contact from './components/ui/Contact'
import Footer from './components/ui/footer'
import BackgroundGradient from './components/ui/background-gradient'
import Journey from './components/ui/Journey'
import './App.css'

function App() {
  const [language, setLanguage] = useState('EN')
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'NL' : 'EN')
  }

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundGradient />
      <Navigation language={language} onToggleLanguage={toggleLanguage} />
      <main className="pt-16 relative">
        <Hero language={language} />
        <Skills language={language} />
        <Journey language={language} />
        <Portfolio language={language} />
        <Contact language={language} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
