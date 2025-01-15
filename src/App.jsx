import { useEffect } from 'react'
import Navigation from './components/ui/navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/ui/footer'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
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
