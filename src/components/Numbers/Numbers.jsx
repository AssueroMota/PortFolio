import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
const Numbers = () => {

    const NumberExp = [
        {
            icone: '+',
            number: '31',
            describe: 'Projetos Realizados na Carreira'
        },
        {
            icone: '+',
            number: '03',
            describe: 'Anos de Experiência Profissional'
        },
        {
            icone: '+',
            number: '04',
            describe: 'Linguagens de programação'
        },
        {
            icone: '+',
            number: '51',
            describe: 'Cursos extracurrículares'
        },
    ]

    return (
        <>

            <div className="Numbers-container ">
                {NumberExp.map((item, index) => {
                    return (
                        <div key={index} className="Numbers-container-2">

                            <div className="Numbers-container-Item">
                                <div className="Numbers-Simbol">
                                    {item.icone}
                                </div>
                                <div className="Numbers-Numbers">
                                    <CountUp start={0} end={item.number} duration={20} separator="," />
                                    {/* {item.number} */}
                                </div>
                            </div>

                            <div className="Numbers-container-describe ">
                                {item.describe}
                            </div>

                        </div>
                    )
                }

                )}
            </div>

        </>
    )
}
export default Numbers;
