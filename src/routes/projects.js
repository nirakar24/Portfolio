import React from 'react'
import Bgimg2 from '../components/Bgimg2'
import Work from '../components/Work'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const projects = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg2 heading="PROJECTS." text="Recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default projects