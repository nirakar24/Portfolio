import "./CardStyles.css"
import contact from "../assets/contact.jpg"

import React from 'react'
import { NavLink } from "react-router-dom"

const Card = () => {
  return (
    <div className="card-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={contact} alt="image"/>
                <h2 className="project-title">Project-title</h2>
                <div className="pro-details">
                    <p>This is Text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn btn-light">source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card