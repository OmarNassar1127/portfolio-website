import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { siteConfig } from "../../config/site"

const Contact = ({ language }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct email URL with form data
    const formData = new FormData(e.target);
    const subject = formData.get('subject');
    const message = formData.get('message');
    const mailtoUrl = `mailto:contact@omardev.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Simulate sending delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);

    // Open email client
    window.location.href = mailtoUrl;
  };

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container fade-in-up relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {language === "EN" ? "Get in Touch" : "Neem contact op"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "EN" 
              ? "Let's discuss your project or potential collaboration. I'm always open to new opportunities and interesting ideas."
              : "Laten we uw project of mogelijke samenwerking bespreken. Ik sta altijd open voor nieuwe kansen en interessante ideeën."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  {language === "EN" ? "Contact Information" : "Contactgegevens"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contact@omardev.xyz" className="hover:text-primary transition-colors">
                    contact@omardev.xyz
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{language === "EN" ? "Available upon request" : "Beschikbaar op aanvraag"}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Netherlands</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Send className="h-5 w-5 text-primary" />
                  {language === "EN" ? "Send Message" : "Stuur Bericht"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input 
                        name="name"
                        placeholder={language === "EN" ? "Name" : "Naam"}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        name="email"
                        type="email" 
                        placeholder={language === "EN" ? "Email" : "E-mail"}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input 
                      name="subject"
                      placeholder={language === "EN" ? "Subject" : "Onderwerp"}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea 
                      name="message"
                      placeholder={language === "EN" ? "Your message" : "Uw bericht"}
                      className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/40 transition-colors resize-none"
                      required
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      disabled={loading}
                    >
                      <AnimatePresence mode="wait">
                        {loading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-2 h-4 w-4"
                            >
                              ◌
                            </motion.div>
                            {language === "EN" ? "Sending..." : "Verzenden..."}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <Send className="mr-2 h-4 w-4" />
                            {language === "EN" ? "Send Message" : "Verstuur Bericht"}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
