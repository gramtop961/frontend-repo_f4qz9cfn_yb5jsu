import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Vendors from './components/Vendors'
import CTA from './components/CTA'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Products />
      <Vendors />
      <CTA />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
