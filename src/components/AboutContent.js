import "./AboutContentStyle.css"
import img1 from "../assets/google_cert.png"
import img2 from "../assets/python.jpg"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Skills</h1>
            <div className="skills">
                <ol>
                    <li>Proficient in Python (5 stars in HackerRank) and Java (3 stars in HackerRank).</li>
                    <li>Experienced in web technologies including Django</li>
                    <li>Skilled in utilizing the OpenCV library for advanced image manipulation.</li>
                    <li>Profound understanding of database management with SQLite.</li>
                    <li>Possess foundational knowledge in Machine Learning and Data Analysis.</li>
                </ol>
            </div>
            <div className="about-btn">
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            <Link to="https://docs.google.com/document/d/1gCF17q2erVAxH270w5hrYqpOLK0TP9NkMGvh66OUruM/edit?usp=sharing">
                <button className="btn btn-light">Resume</button>
            </Link></div>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top"><Link to="https://drive.google.com/file/d/1UXGabZznc8A3QXg4Mp3T31SsiEuoytMA/view?usp=sharing">
                    <img src={img1} className="img" alt="image"/></Link>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} className="img" alt="image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent