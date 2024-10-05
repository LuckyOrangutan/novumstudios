import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovate. Create. Elevate.
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Novum Studios: Your partner in Tokenomics, Game Development, and Business Innovation
        </motion.p>
        <motion.a 
          href="#contact" 
          className="bg-white text-indigo-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  )
}

export default Hero