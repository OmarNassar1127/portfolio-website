import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "./button"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/OmarNassar1127", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/omar-nassar-b63b93220/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@omardev.xyz", label: "Email" },
    { icon: Twitter, href: "https://twitter.com/GodelTrabuco69", label: "Twitter" },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Omar Nassar. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
