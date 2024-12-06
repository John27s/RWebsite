import React from "react";
import './About.css';

function About ({Color,text,bgColor}){
    return(
        <div className={`about ${bgColor}`} style={{color: Color}}>
            <p>{text}</p>
        </div>
    );
}

export default About;
