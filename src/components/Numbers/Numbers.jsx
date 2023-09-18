import React from "react";

const Numbers = () => {

    const NumberExp = [
        {
            icone: '+',
            number: '11',
            describe: 'Projetos Profissionais'
        },
        {
            icone: '+',
            number: '03',
            describe: 'Anos de Experiência Profissional'
        },
        {
            icone: '+',
            number: '03',
            describe: 'Linguagens de programação'
        },
        {
            icone: '+',
            number: '49',
            describe: 'Cursos extracurrículares'
        },
    ]
    return (
        <>
   
            <div className="Numbers-container">
                {NumberExp.map((item, index) => {
                    return (
                        <div key={index} className="Numbers-container-2">

                            <div className="Numbers-container-Item">
                                <div className="Numbers-Simbol">
                                    {item.icone}
                                </div>
                                <div className="Numbers-Numbers">
                                    {item.number}
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
