export const siteConfig = {
  name: process.env.VITE_SITE_NAME || "",
  description: process.env.VITE_SITE_DESCRIPTION || "",
  links: {
    github: process.env.VITE_GITHUB_URL || "",
    linkedin: process.env.VITE_LINKEDIN_URL || "",
    twitter: process.env.VITE_TWITTER_URL || "",
    email: process.env.VITE_CONTACT_EMAIL || ""
  }
}
