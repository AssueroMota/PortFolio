import React from "react";
import me from '../../assets/img/perfil/me.jpg'
import down from '../../assets/img/perfil/download.svg'
import Curses from "../Curses/Curses";
import Service from "../Service/Service";

const Perfil = () => {
    const pdfUrl = '../../../public/files/document/AssueroCv.pdf';
    return (
        <>
            <div className="PerFil"> 
                <div className="Perfil-Container">
                    <div className="Perfil-img grid-item-1" data-aos="fade-down-left">
                        <img src={me} alt="" />
                    </div>
                    <div className="Perfil-Social grid-item-2">
                        <div className="Perfil-Social-2">
                            <div>
                                <h2 className="Perfil-Title" data-aos="fade-down-right"> Web and Mobile Developer  <span className="Perfil-Title-span"> Expertise in JavaScript</span></h2>
                                <p className="Perfil-Describe" data-aos="fade-up-right">With 8 years of immersion in technology, in the last 3 years, I have specialized in JavaScript technologies, such as React, Vue.js, TypeScript and Angular, in addition to having experience in mobile development with React Native. This expertise enables me to create dynamic and efficient web interfaces for mobile applications.</p>
                            </div>
                            <div className="PerfilBtn" >
                                <div className="Perfil-Btn" data-aos="fade-up">
                                    <img src={down} alt="" />
                                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <p className="Perfil-Cv" >Download CV </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="Perfil-Title-2-main" data-aos="fade-left">
                            <h2 className="Perfil-Title-2"> Experience with <span className="Perfil-Title-span-2">international customers</span></h2>
                            <p className="Perfil-Describe-2">I had the opportunity to collaborate with international clients through a web application agency in New Jersey, USA, enriching my experience by working on global projects and meeting the needs of a diverse audience, My complete CV with further information provided about my experience is available above. If you prefer, we can schedule a call via my email, also available here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Perfil;