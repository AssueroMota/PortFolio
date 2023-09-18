import React, { useState } from "react";
import './About.css'

const About = () => {

    const [currentTextCounter, setCurrentTextCounter] = useState(0);
    const texts = ["Desenvolvimento web", "Desenvolvimento Back-end", "Desenvolvimento Mobile"];



    return (
        <>
            <div className="About-container">
                <p className="About-title">A tecnologia é a força motriz por trás da mudança constante</p>
                <h1 className="About-Name">Olá, sou <span className="About-Name-span">Assuero Mota</span>, especialista em</h1>
          
                    {/* <div class="About-Dev-container">
                    <span className="About-Dev">Desenvolvimento web</span>
                    <span className="About-Dev">Desenvolvimento web</span>
                    <span className="About-Dev">Desenvolvimento web</span>
                </div> */}
                <p className="About-Dev">{texts[currentTextCounter]}</p>
                
            </div>
        </>
    )
}
export default About;