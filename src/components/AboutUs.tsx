import React from 'react'
import { Lightbulb, Rocket, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Novum Studios
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Lightbulb, title: "Innovative Solutions", description: "We bring cutting-edge ideas to life, pushing the boundaries of what's possible in tech and business." },
            { icon: Rocket, title: "Rapid Growth", description: "Our strategies are designed to propel your business forward, ensuring sustainable and accelerated growth." },
            { icon: Target, title: "Targeted Expertise", description: "With specialized knowledge in Tokenomics, Game Development, and Business Consulting, we deliver precise solutions." }
          ].map((item, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <item.icon className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs