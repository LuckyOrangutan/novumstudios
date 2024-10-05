import React from 'react'
import { Coins, Gamepad2, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
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
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Coins, title: "Tokenomics Consulting", description: "Expert guidance on cryptocurrency economics, token design, and blockchain integration for your projects." },
            { icon: Gamepad2, title: "Game Development", description: "End-to-end game development services, from concept to launch, including monetization strategies and player retention." },
            { icon: Users, title: "Business Innovation", description: "Comprehensive business consulting to drive innovation, optimize operations, and achieve sustainable growth." }
          ].map((service, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services