import React from "react";
import github from '../../assets/img/contact/github.svg'
import linkedin from '../../assets/img/contact/linkedin.svg'
import whatsapp from '../../assets/img/contact/whatsapp.svg'
import caretUp from '../../assets/img/contact/caret-up.svg'
import bulletAvailable from '../../assets/img/contact/bullet-available.svg'

const Contact = () => {


    const img = [
        { link: 'https://github.com/AssueroMota', icone: github },
        { link: 'https://www.linkedin.com/in/assueromota/', icone: linkedin },
        { link: 'https://api.whatsapp.com/send?phone=5581989957462&text=', icone: whatsapp }
    ]
    const currentDate = new Date();
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDate();

    return (
        <>
            <div className="Contact-container">
                <div className="Contact-ctn" data-aos="fade-left" data-aos-duration="800">
                    <div className="Contact-Fit"></div>
                    <h2 className="Contact-Title">Contato</h2>
                </div>
                <div className="Contact-container-2" data-aos="fade-right" data-aos-duration="800">
                    <div className="Contact-date">
                        <img src={bulletAvailable} alt="" />
                        <span>Agenda aberta para hoje dia {currentDay} de {currentMonth} de 2023</span>
                    </div>

                    <div className="Contact-container-email">
                        <p className="Contact-Email">AssueroMota<p className="Contact-Email-span">@gmail.com</p></p>
                    </div>

                    <div className="Contact-social">
                        {img.map((img, index) => {
                            return (
                                <div key={index}>
                                    <a href={img.link} target="_blank"><img src={img.icone} /></a>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div className="Contact-union" >
                <div className="Contact-name" data-aos="fade-right" data-aos-duration="800">
                    <p className="MyName">Assuero Mota © 2023</p>
                </div>
                <div className="Contact-back" data-aos="fade-left" data-aos-duration="800">
                    <img
                        src={caretUp}
                        alt=""
                        className="jump-animation"
                    />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        <p className="Contact-describe">Voltar ao topo</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;