import React from "react";

const op = [
    {
        title: 'Front-End Web/Mobile Development',
        describe: "Experience in JavaScript technologies (React Native, React, Vue.js, Angular) for Web and Mobile applications. I also have expertise in using CSS frameworks, including Bootstrap, Tailwind CSS and Sass/SCSS, to create modern and responsive designs."
    },
    {
        title: 'Back-End Web Development',
        describe: "I have expertise in back-end development with PHP, with an emphasis on the efficient integration of databases, including MongoDB and MySQL. This allows me to create robust systems, such as CMS, e-commerce and REST APIs, ensuring the necessary functionality, scalability and performance to meet the demands of web projects."
    }
]


const Service = () => {
    return (
        <>
            <div className="Service-container">
                <h2 className="Service-h2" data-aos="fade-right" data-aos-duration="800"> Services</h2>
                <div className="Service-container-main">
                    {op.map((item, index) => {
                        return (
                            <div key={index} className="Service-container-2" data-aos="fade-right" data-aos-duration="1200">
                                <div className="Service-container-main-2">
                                    <h3 className="Service-title">{item.title}</h3>
                                    <p className="Service-describe">{item.describe}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Service;