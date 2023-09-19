import React from "react";
import Aguia from '../../assets/img/projects/Aguia.jpeg'
import Golf from '../../assets/img/projects/Golf.jpg'
import HumpBack from '../../assets/img/projects/HumpBack.jpg'
import imgIdeias from '../../assets/img/projects/imgIdeias.jpg'
import ImgPia from '../../assets/img/projects/ImgPia.jpg'
import SeldenInk from '../../assets/img/projects/SeldenInk.jpg'
import SafariHeader from "../Safari/Safari";

const ShowProjects = [
    {
        image: SeldenInk,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'SeldenInk',
        link: 'https://seldenink.vercel.app/'
    },
    {
        image: HumpBack,
        tech: 'React + Vite ',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'HumpBack',
        link: 'https://humpback-one.vercel.app/'
    },
    {
        image: Golf,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Karty Golf',
        link: 'https://karty-golf.vercel.app/'
    },
    {
        image: imgIdeias,
        tech: 'React Native',
        tech2: 'Node',
        tech3: 'CSS',
        name: 'Ideas',
        link: 'https://ideas-front-end.vercel.app/'
    },
    {
        image: ImgPia,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Agency Pia',
        link: 'https://www.bigapplepia.com/'

    },

    {
        image: Aguia,
        tech: 'Vue.js',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Aguias MarTech',
        link: 'https://aguiasmartech.vercel.app/'
    },


]


const Projects = () => {
    return (
        <>
            <div className="Projects-container">
                <div className="Projects-container-title">
                    <h1 className="Projects-title" data-aos-anchor-placement="top-bottom" data-aos="fade-down">Works</h1>
                </div>
                <div className="Projects-main" data-aos="zoom-in" data-aos-duration="1200">
                    {ShowProjects.map((item, index) => {
                        // Adicione a classe "second-column" à segunda coluna
                        const columnClass = index === 1 ? "second-column" : "";
                        const column4Class = index === 3 ? "four-column" : "";
                        const column6Class = index === 5 ? "six-column" : "";
                        return (
                            <div key={index}>
                                {/* <div className="Projects-container-img"> */}
                                <div className={`Projects-container-img ${columnClass} ${column4Class} ${column6Class}`}>
                                    {/* <div className="window"></div> */}
                                    <SafariHeader />
                                    <a href={item.link} style={{ textDecoration: 'none' }}>
                                        <img src={item.image} alt="" />
                                    </a>
                                </div>
                                <div className="Projects-tech">
                                    <p className="tech">{item.tech}</p>
                                    <p className="tech">{item.tech2}</p>
                                    <p className="tech">{item.tech3}</p>
                                </div>
                                <div className="Projects-name">
                                    <h5 className="Projects-item">{item.name}</h5>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}
export default Projects;