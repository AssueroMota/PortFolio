import React from "react";

const op = [
    {
        title: 'Desenvolvimento Front-End Web/Mobile',
        describe: "Experiência em tecnologias JavaScript (React Native, React, Vue.js, Angular) para aplicações Web e Mobile também tenho expertise na utilização de frameworks CSS,incluindo Bootstrap, Tailwind CSS e Sass/SCSS, para criar designs modernos e responsivos"
    },
    {
        title: 'Desenvolvimento Back-End Web',
        describe: "Possuo expertise em desenvolvimento back-end com PHP, com ênfase na integração eficiente de bancos de dados, incluindo MongoDB e MySQL. Isso me permite criar sistemas robustos, como CMS, e-commerce e APIs REST, garantindo a funcionalidade, escalabilidade e desempenho necessários para atender às demandas dos projetos web."
    }
]


const Service = () => {
    return (
        <>
            <div className="Service-container">
                <h2 className="Service-h2"> Serviços</h2>
                <div className="Service-container-main">
                    {op.map((item, index) => {
                        return (
                            <div key={index} className="Service-container-2">
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