import './FooterStyles.css'

import React from 'react'
import {Link} from "react-router-dom"
import { FaGithub, FaGithubSquare, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                   <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   <p>Kalyan,Maharashtra,<br/>India. 421306</p>
                </div>
                <div className='phone'>
                   <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   +91-7400285472</h4>
                </div>
                <div className='email'>
                   <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   jenashubham60@gmail.com</h4>
                </div>  
            </div>
            <div className='right'>
              <h4>About me</h4>
              <p>Dedicated and motivated engineering student pursuing a Bachelor's degree in Artificial Intelligence and Data Science. Skilled in Python and Java programming languages, with hands-on experience in software development, image processing, and web technologies. Eager to leverage knowledge and passion for AI to contribute to innovative projects and further professional growth.</p>
              <div className='social'>
              <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Footer