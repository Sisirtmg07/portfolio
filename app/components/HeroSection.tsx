"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const rotatingPhrases = [
  "Digital Banking Support Engineer",
  "Electronics Sub-Engineer",
  "Client Service Expert",
  "Tech Enthusiast",
  "Solution Finder",
]

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6"
      >
        <h2 className="text-2xl text-gray-700 dark:text-gray-300">Hello, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">Sisir Tamang</h1>

        {/* Animated Typing Text */}
        <div className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
          And I'm an{" "}
          <span className="text-red-500 dark:text-red-400">
            <TypeAnimation
              sequence={rotatingPhrases.flatMap((phrase) => [phrase, 2500])} // 2.5s delay per phrase
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              cursor={true}
            />
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
      </motion.div>
    </section>
  )
}

