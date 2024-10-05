import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App