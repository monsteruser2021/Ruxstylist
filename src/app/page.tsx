import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portafolio'
import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
