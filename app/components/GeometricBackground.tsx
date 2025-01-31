"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function GeometricBackground() {
  const [randomElements, setRandomElements] = useState([])

  useEffect(() => {
    setRandomElements(generateRandomElements())
  }, [])

  const generateRandomElements = () => {
    const elements = []
    for (let i = 0; i < 20; i++) {
      elements.push({
        style: generateRandomStyle(i),
        motion: generateRandomMotion(i),
      })
    }
    return elements
  }

  const generateRandomStyle = (i: number) => ({
    width: `${Math.random() * 100 + 50}px`,
    height: `${Math.random() * 100 + 50}px`,
    borderRadius: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    backgroundColor: generateRandomColor(),
  })

  const generateRandomMotion = (i: number) => ({
    x: Math.sin(i) * 100,
    y: Math.cos(i) * 100,
    rotate: (i % 2 === 0 ? 1 : -1) * Math.random() * 360,
  })

  const generateRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20 dark:opacity-10">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {randomElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={el.style}
            animate={el.motion}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

