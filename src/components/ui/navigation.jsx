import { useState, useEffect } from 'react'
import { Button } from "./button"
import { Menu, X, User, Code, Briefcase, Mail, Download, Languages, History } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = ({ language, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { 
      labelEN: 'About',
      labelNL: 'Over mij',
      href: '#about',
      icon: User
    },
    {
      labelEN: 'Skills',
      labelNL: 'Vaardigheden',
      href: '#skills',
      icon: Code
    },
    {
      labelEN: 'Journey',
      labelNL: 'Reis',
      href: '#journey',
      icon: History
    },
    {
      labelEN: 'Portfolio',
      labelNL: 'Portfolio',
      href: '#portfolio',
      icon: Briefcase
    },
    {
      labelEN: 'Contact',
      labelNL: 'Contact',
      href: '#contact',
      icon: Mail
    },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Omar Nassar
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.labelEN}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {language === "EN" ? item.labelEN : item.labelNL}
                </span>
              </a>
            ))}
            <Button onClick={onToggleLanguage} variant="outline" className="mr-4">
              {language === "EN" ? "NL" : "EN"}
            </Button>
            <Button asChild>
              <a 
                href={language === "EN" ? "/cv/Omar-cv-en.pdf" : "/cv/Omar-cv-nl.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "EN" ? "Download CV" : "Download CV"}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.labelEN}
                    href={item.href}
                    className="block text-sm font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {language === "EN" ? item.labelEN : item.labelNL}
                    </span>
                  </a>
                ))}
                <Button onClick={onToggleLanguage} variant="outline" className="w-full mb-2">
                  {language === "EN" ? "NL" : "EN"}
                </Button>
                <Button className="w-full" asChild>
                  <a 
                    href={language === "EN" ? "/cv/Omar-cv-en.pdf" : "/cv/Omar-cv-nl.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === "EN" ? "Download CV" : "Download CV"}
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navigation
