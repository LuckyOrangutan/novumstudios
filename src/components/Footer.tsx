import React from 'react'
import { Hexagon, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center">
              <Hexagon className="h-8 w-8 text-indigo-400 mr-2" />
              <span className="font-bold text-xl">Novum Studios</span>
            </div>
            <p className="mt-2 text-gray-400">Innovating the future of tech and business</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Github /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Novum Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer