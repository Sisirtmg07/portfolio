"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import GeometricBackground from "./components/GeometricBackground"
import DarkModeToggle from "./components/DarkModeToggle"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen ${darkMode ? "dark" : ""}`}
    >
      <GeometricBackground />
      <div className="relative z-10">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </motion.div>
  )
}

