"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaServer, FaTools, FaUsers, FaShieldAlt, FaNetworkWired, FaClock, FaDownload } from "react-icons/fa"

const skills = [
  {
    category: "Technical Skills",
    items: [
      { name: "ATM & Kiosk Hardware (Diebold, Wincor Nixdorf)", icon: FaServer },
      { name: "Software: Diebold, Remote Monitoring Tools", icon: FaTools },
      { name: "Networking: LAN/WAN, VPN, Secure Protocols", icon: FaNetworkWired },
      { name: "Data Security: EMV, PCI-DSS Compliance", icon: FaShieldAlt },
      { name: "Diagnostic Tools & Service Management Platforms", icon: FaTools },
      { name: "MS Office & ServiceNow for Documentation", icon: FaTools },
    ],
  },
  {
    category: "Professional Skills",
    items: [
      { name: "Problem Solving & Analytical Thinking", icon: FaTools },
      { name: "Technical Documentation", icon: FaTools },
      { name: "Customer Service Excellence", icon: FaUsers },
      { name: "Team Collaboration", icon: FaUsers },
      { name: "Preventive Maintenance", icon: FaTools },
      { name: "Time Management", icon: FaClock },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skillSet.category}</h3>

              {/* Skill List */}
              <ul className="space-y-3">
                {skillSet.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    {React.createElement(skill.icon, { className: "text-blue-500 text-lg" })}
                    <span className="text-base">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://drive.google.com/file/d/12-cxVkbGWodIvy89Ihcc-oE7mxSqk-vb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

