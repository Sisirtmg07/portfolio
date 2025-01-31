"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2 mb-8 md:mb-0 relative group"
          >
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Sisir Tamang"
                fill
                priority
                className="rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="md:w-1/2 space-y-6 text-lg"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Experienced Technical Field Support Engineer specializing in ATMs, CDMs, Kiosks, and Note Sorting Machines
              (NSM). With a strong foundation in hardware and software diagnostics, I ensure smooth operation of
              self-service banking systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My expertise extends to network connectivity, system security, and preventive maintenance. I focus on
              delivering prompt, effective support while maintaining high standards of customer satisfaction.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Based in Koteshwor, Kathmandu, Nepal, I bring technical expertise and problem-solving skills to ensure
              reliable banking services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

