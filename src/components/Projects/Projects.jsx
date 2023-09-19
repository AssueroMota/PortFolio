import React from "react";
import example from '../../assets/img/projects/projects.jpg'
import example1 from '../../assets/img/projects/projects0.jpg'
import example2 from '../../assets/img/projects/project3.jpg'
import example0 from '../../assets/img/projects/project2.jpg'
import SafariHeader from "../Safari/Safari";

const ShowProjects = [
    {
        image: example,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Karty Golf'
    },
    {
        image: example1,
        tech: 'React + Vite ',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Pia Agency'
    },
    {
        image: example0,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'HumpBack'
    },
    {
        image: example2,
        tech: 'React + Vite',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Selden Ink'
    },

]


const Projects = () => {
    return (
        <> 
            <div className="Projects-container">
                <div className="Projects-container-title">
                    <h1 className="Projects-title" data-aos-anchor-placement="top-bottom" data-aos="fade-down">projetos</h1>
                </div>
                <div className="Projects-main" data-aos="zoom-in" data-aos-duration="1200">
                    {ShowProjects.map((item, index) => {
                        // Adicione a classe "second-column" à segunda coluna
                        const columnClass = index === 1 ? "second-column" : "";
                        const column4Class = index === 3 ? "four-column" : "";
                        return (
                            <div key={index}>
                                {/* <div className="Projects-container-img"> */}
                                <div className={`Projects-container-img ${columnClass} ${column4Class}`}>
                                    {/* <div className="window"></div> */}
                                    <SafariHeader />
                                    <img src={item.image} alt="" />
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