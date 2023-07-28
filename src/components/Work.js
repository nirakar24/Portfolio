import "./CardStyles.css";
import Card from "./Card";
import CardData from "./CardData";

import React from 'react'
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="card-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {CardData.map((val,ind) =>{
                return(
                    <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default Work 