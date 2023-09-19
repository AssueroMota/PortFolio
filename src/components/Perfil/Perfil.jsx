import React from "react";
import me from '../../assets/img/perfil/me.jpg'
import down from '../../assets/img/perfil/download.svg'

const Perfil = () => {
    const pdfUrl = '../../../public/files/document/AssueroCv.pdf';
    return (
        <>
            <div className="Perfil-Container">
                <div className="Perfil-img grid-item-1">
                    <img src={me} alt="" />
                </div>
                <div className="Perfil-Social grid-item-2">
                    <div className="Perfil-Social-2">
                        <div>
                            <h2 className="Perfil-Title">Desenvolvedor Web e Mobile  <span className="Perfil-Title-span"> Expertise em JavaScript</span></h2>
                            <p className="Perfil-Describe">Com 8 anos de imersão na tecnologia, nos últimos 3 anos, tenho me especializado em tecnologias JavaScript, tais como React, Vue.js, TypeScript e Angular, além de possuir experiência em desenvolvimento mobile com React Native. Essa expertise me capacita a criar interfaces web dinâmicas e eficientes para aplicativos móveis.</p>
                        </div>
                        <div className="PerfilBtn">
                            <div className="Perfil-Btn">
                                <img src={down} alt="" />
                                <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <p className="Perfil-Cv" >Baixar CV </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil-Title-2-main">
                        <h2 className="Perfil-Title-2"> Experiência com <span className="Perfil-Title-span-2">clientes internacionais</span></h2>
                        <p className="Perfil-Describe-2">Tive a oportunidade de colaborar com clientes internacionais por meio de uma agência de web application em New Jersey, EUA, enriquecendo minha experiência ao trabalhar em projetos globais e atender às necessidades de um público diversificado, Meu currículo completo com informações mais detalhadas sobre minha experiência está disponível acima. Caso prefira, podemos agendar uma chamada através do meu e-mail, também disponibilizado aqui.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Perfil;