import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/600x400/?cryptocurrency" alt="Tokenomics Project" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">CryptoVerse Token Design</h3>
              <p className="text-gray-600">Innovative tokenomics for a decentralized metaverse project</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/600x400/?videogame" alt="Game Development Project" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Stellar Conquest</h3>
              <p className="text-gray-600">A blockchain-integrated space strategy game</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src="https://source.unsplash.com/600x400/?startup" alt="Business Innovation Project" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">TechStart Accelerator</h3>
              <p className="text-gray-600">Comprehensive innovation program for tech startups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio