"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">sisirtmg07@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">+977 9864197492</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">Koteshwor, Kathmandu, Nepal </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/sisir-tamang-oo7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

