import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
const Numbers = () => {

    const NumberExp = [
        {
            icone: '+',
            number: '31',
            describe: 'Projects carried out in my career'
        },
        {
            icone: '+',
            number: '03',
            describe: 'Years of Professional Experience'
        },
        {
            icone: '+',
            number: '04',
            describe: 'Programming languages'
        },
        {
            icone: '+',
            number: '51',
            describe: 'Extracurricular courses'
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
