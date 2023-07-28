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
            <p>HI, IT'S NIRAKAR JENA</p>
            <h1>Python Developer and AI Enthusiast.</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/about" className="btn btn-light">About</Link>
            </div>
        </div>
    </div>
  )
}

export default Bgimg