import React, { useState } from "react";
import type from '../../assets/img/header/type.svg';
import bulletAvailable from '../../assets/img/header/bullet-available.svg';
import symbol from '../../assets/img/header/symbol.svg';
import what from '../../assets/img/header/whatsapp.svg';
import send from '../../assets/img/header/send-email.svg';
import sun from '../../assets/img/header/sun.svg';
import moon from '../../assets/img/header/moon.svg';
import './Header.css'

const Header = () => {
    const [isSun, setIsSun] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const toggletheme = () => {
        setIsSun(!isSun);
    }
    const currentDate = new Date();
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDate();


    return (
        <>

            <div className="header-container">
                <div
                    className="header-logo"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                >
                    <img className='header-symbol' src={symbol} alt="" />
                    <img className={`header-type ${isHovered ? 'hovered' : ''}`} src={type} alt="" /> 
                </div>

                <div className="header-notepad">
                    <img className="header-bullet" src={bulletAvailable} alt="" />
                    <span className="header-note">Agenda aberta para hoje dia {currentDay} de {currentMonth} de 2023</span>
                </div>

                <div className="header-container-2">
                    <div className="header-contact-number">
                        <img className='header-what' src={what} alt="" />
                        <span className="header-number-tel">+55  (81) 8995-7462</span>
                    </div>
                    <div className="header-btn">
                        <img className="header-send" src={send} alt="" />
                        <span className="header-contact" >Contato</span>
                    </div>
                    <div className="header-sun" onClick={toggletheme}>
                        {isSun ? (<img src={sun} alt="" />) : (<img src={moon} alt="" />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;