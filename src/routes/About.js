import React from 'react'
import AboutContent from '../components/AboutContent'
import Bgimg2 from '../components/Bgimg2'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg2 heading="ABOUT ME" text="Passionate Python Developer and AI Enthusiast driven to create innovative solutions for a better tech-driven world."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
