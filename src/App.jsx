import { useEffect } from 'react'
import Navigation from './components/ui/navigation'
import Hero from './components/ui/Hero'
import Portfolio from './components/ui/Portfolio'
import Skills from './components/ui/Skills'
import Contact from './components/ui/Contact'
import Footer from './components/ui/footer'
import BackgroundGradient from './components/ui/background-gradient'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundGradient />
      <Navigation />
      <main className="pt-16 relative">
        <Hero />
        <Skills id="skills" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
