import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Highlight from './components/Highlight'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with 3D glowing sphere (Spline) */}
      <Hero />

      {/* About Us */}
      <About />

      {/* Services */}
      <Services />

      {/* Highlight with bigger glowing sphere */}
      <Highlight />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
