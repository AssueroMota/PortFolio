import React, { useState, useEffect } from "react";
import './About.css'

import Typewriter from 'typewriter-effect';

const About = () => {

    const [currentTextCounter, setCurrentTextCounter] = useState(0);
    const texts = ["Web Developer", "Desenvolvimento Back-end", "Desenvolvimento Mobile"];



    return (
        <>
            <div className="About-container" data-aos="fade-up" data-aos-duration="1000">
                <p className="About-title">Technology is the driving force behind constant change</p>
                <h1 className="About-Name">Hi, I'm <span className="About-Name-span">Assuero Mota</span>, Knowledgeable in</h1>

                {/* <div class="About-Dev-container">
                    <span className="About-Dev">Desenvolvimento web</span>
                    <span className="About-Dev">Desenvolvimento web</span>
                    <span className="About-Dev">Desenvolvimento web</span>
                </div> */}

                {/* <p className="About-Dev">
                        {texts[currentTextCounter]}
                    </p> */}
                <p className="About-Dev">
                    <Typewriter
                        options={{
                            strings: ["Full Stack Engineer", "Mobile Developer", "Data Analyst","I.T Analyst","Network Technician","Innovation-driven IT"],
                            autoStart: true, 
                            loop: true, 
                            delay: 75, 
                        }}
                    />

                </p>
            </div >
        </>
    )
}
export default About;