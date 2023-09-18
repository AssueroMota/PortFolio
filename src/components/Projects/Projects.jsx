import React from "react";
import example from '../../assets/img/projects/projects.jpg'
import SafariHeader from "../Safari/Safari";

const ShowProjects = [
    {
        image: example,
        tech: 'React',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Portfolio pessoal'
    },
    {
        image: example,
        tech: 'React',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Portfolio pessoal'
    },
    {
        image: example,
        tech: 'React',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Portfolio pessoal'
    },
    {
        image: example,
        tech: 'React',
        tech2: 'TypeScript',
        tech3: 'Scss',
        name: 'Portfolio pessoal'
    },

]


const Projects = () => {
    return (
        <>
            <div className="Projects-container">
                <div className="Projects-container-title">
                    <h1 className="Projects-title">projetos</h1>
                </div>
                <div className="Projects-main">
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