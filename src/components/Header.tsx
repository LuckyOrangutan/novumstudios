import React, { useState, useEffect } from 'react'
import { Hexagon } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Hexagon className={`h-8 w-8 ${isScrolled ? 'text-indigo-600' : 'text-white'} mr-2`} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Novum Studios</span>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-indigo-200'}`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header