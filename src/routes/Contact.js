import React from 'react'
import Bgimg2 from '../components/Bgimg2'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg2 heading="Contact me" text="Ready to collaborate"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact
