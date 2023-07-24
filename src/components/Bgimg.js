import "./BgimgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom";

const Bgimg = () => {
  return (
    <div className="bg">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>Python Developer.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Bgimg