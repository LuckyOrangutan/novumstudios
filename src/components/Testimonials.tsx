import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4">"Novum Studios transformed our game idea into a profitable reality. Their expertise in both game development and tokenomics was invaluable."</p>
            <p className="font-semibold">- Sarah J., CEO of GameChain Inc.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4">"The business innovation strategies provided by Novum Studios helped us 10x our growth in just one year. Truly exceptional work!"</p>
            <p className="font-semibold">- Michael R., Founder of TechNova</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials