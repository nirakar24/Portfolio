import './FooterStyles.css'

import React from 'react'
import { FaGithub, FaHackerrank, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import {Link} from "react-router-dom"

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
                 <a href='mailto:jenashubham60@gmail.com'><h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   jenashubham60@gmail.com</h4></a>
                </div>  
            </div>
            <div className='right'>
              <h4>Who am I?</h4>
              <p>Dedicated and motivated engineering student pursuing a Bachelor's degree in Artificial Intelligence and Data Science. Skilled in Python and Java programming languages, with hands-on experience in software development, image processing, and web technologies. Eager to leverage knowledge and passion for AI to contribute to innovative projects and further professional growth.</p>
              <div className='social'>
              <Link to="https://github.com/nirakar24"><FaGithub className='gith' size={20} style={{color:"#fff", marginRight:"2rem"}}/></Link>
              <Link to="https://www.linkedin.com/in/nirakar-jena-ab12b518b/"><FaLinkedin className='linkd' size={20} style={{color:"#fff", marginRight:"2rem"}}/></Link>
              <Link to="https://www.instagram.com/nirakar_24_/"><FaInstagram className='insta' size={20} style={{color:"#fff", marginRight:"2rem"}}/></Link>
              <Link to="https://www.hackerrank.com/jenashubham60?hr_r=1"><FaHackerrank className='hacker' size={20} style={{color:"#fff", marginRight:"2rem"}}/></Link>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Footer