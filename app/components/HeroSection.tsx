"use client"

import { useState, useEffect } from "react"

const rotatingPhrases = [
  "ATM & Banking Support Engineer",
  "Electronics Sub Engineer",
  "Client Service Expert",
  "Tech Enthusiast",
  "Solution Finder",
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true) // Start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingPhrases.length)
        setFade(false) // Start fade-in
      }, 500) // Half-second fade transition
    }, 2500) // Change text every 2.5s

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center space-y-6">
        <h2 className="text-2xl text-gray-700 dark:text-gray-300">Hello, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">Sisir Tamang</h1>

        {/* Animated Typing Text (Smooth Transition) */}
        <div className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
          And I'm an{" "}
          <span
            className={`text-red-500 dark:text-red-400 font-semibold transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {rotatingPhrases[index]}
          </span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="#about"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

