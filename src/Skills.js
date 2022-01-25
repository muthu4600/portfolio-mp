import React from "react";
import "./Education.css";
import mern from "./img/mern.png"

function Skills() {
    return(
        <div className="service component__space" id="Skills">
            <div className="heading">
            <h1 className="heading" >SKILLS</h1>
            <div className="img">
               
                    <img  src={mern}></img >

               
        </div>
            </div>
        </div>
    )
}

export default Skills;