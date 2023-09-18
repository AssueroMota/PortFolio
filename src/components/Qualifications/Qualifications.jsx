import React from "react";
import Alura from "./img/alura-logo.svg"
import Grau from "./img/logo-grau.png"
import Unibra from "./img/logo-unibra-azul.png"
import Nassau from "./img/logo-nassau.png"
import Marista from "./img/Marista.png"
import Litoraneus from "./img/Litoraneus.png"
import Chesf from "./img/eletrobras-chesf-logo.png"
import { FaAward } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import './scss/main.scss'
function Qualifications() {
    return (
        <section class="section_qualificacoes" id="qualificacoes">
            <header class="cabecalho">
                <h2 class="titulo">Minhas qualificações e experiências</h2>
            </header>
            <div class="bloco_button">
                <button class="button button_educacao educacao" data-id="educacao" aria-label="Qualificações">
                    <FaAward className='iconTitle'/> 
                    Qualificações</button>
                <button class="button button_work" data-id="work" aria-label="Trabalhos">
                    <FaBriefcase className='iconTitle'/>
                    Experiências</button>
            </div>
            <div class="container_qualificacoes">
                <ul class="lista" id="educacao">
                    <li class="li rigth qualificacao_rigth">
                        <div class="header_qualificacoes">
                            <FaGraduationCap className="icon" />
                            <img src={Alura} alt="Curso da alura" class="curso" />
                        </div>
                        <p class="cargo">Desenvolvimento Front-end</p>
                        <p class="descricao"> tive a oportunidade de me aprofundar em tecnologias importantes como Html,
                            Css, JavaScript, React, Tailwind CSS, Bootstrap</p>
                        <p class="conclusao"><i class="fa-regular fa-calendar-days"></i> 2022-2023</p>
                        <a href="https://cursos.alura.com.br/certificate/c06dda6a-e746-4ccb-9533-e8cccd12ecf5"
                            target="_blank" class="link" download="Certificado Alura" aria-label="Certificado Alura">
                            <button class="button_certificado true" aria-label="Visualizar certificado">Visualizar
                                certificado</button>
                        </a>
                    </li>
                    <li class="li left qualificacao_left">
                        <div class="header_qualificacoes">
                            <FaGraduationCap className="icon" />
                            <img src={Grau} alt="Curso da Grau-Tech" class="curso" width="115rem" />
                        </div>
                        <p class="cargo">Desenvolvimento de Sistema</p>
                        <p class="descricao">Atualmente estou cursando Desenvolvimento de Sistemas na Grau Técnico, onde
                            estou aprendendo diversas linguagens de programação, como Java e JavaScript, além de
                            estruturas de dados, algoritmos e orientação a objetos, com o objetivo de me tornar um
                            programador qualificado e capaz de desenvolver soluções inovadoras.</p>
                        <p class="conclusao"><i class="fa-regular fa-calendar-days"></i> 2022-2023</p>
                        <button class="button_certificado button-progresso" disabled>Em progresso</button>
                    </li>
                    <li class="li rigth qualificacao_rigth">
                        <div class="header_qualificacoes">
                            <FaGraduationCap className="icon" />
                            <img src={Unibra} alt="Curso unibra" class="curso unibra" />
                        </div>
                        <p class="cargo">Tecnólogo em Redes e Sistemas de computadores</p>
                        <p class="descricao">Durante minha graduação, adquiri habilidades em lógica de programação,
                            bancos de dados MySQL, linguagem Java, programação de servidores, sistemas operacionais,
                            virtualização, cloud computing e metodologias ágeis para gestão de projetos de redes e TI.
                            Busquei aprofundar meus conhecimentos em programação orientada a objetos para aplicá-la em
                            meus projetos de forma eficaz.</p>
                        <p class="conclusao">
                            <giti class="fa-regular fa-calendar-days"></giti> 2018-2021
                        </p>
                        <a href="document/#" target="_blank" class="link" download="Certificado Redes"
                            aria-label="Certificado Tecnólogo Redes">
                            <button class="button_certificado button-progresso" disabled
                                aria-label="Visualizar certificado">Aguardando certificado</button>
                        </a>
                    </li>
                    <li class="li left qualificacao_rigth">
                        <div class="header_qualificacoes">
                            <FaGraduationCap className="icon" />
                            <img src={Nassau} alt="Curso Tecnico Informatica" class="curso nassau" />
                        </div>
                        <p class="cargo">Ensino Técnico, Informática</p>
                        <p class="descricao">Curso técnico em informática com ênfase em solução de problemas em
                            computadores e redes, com conhecimentos em configuração e manutenção de hardware e software,
                            sistemas operacionais, redes de computadores, segurança de redes e linguagens de programação
                            Básica.</p>
                        <p class="conclusao">
                            <giti class="fa-regular fa-calendar-days"></giti> 2015-2017
                        </p>
                        <a href="#" target="_blank" class="link"
                            aria-label="Certificado Tecnico Informática">
                            <button class="button_certificado true" target="_blank"
                                aria-label="Visualizar certificado">Visualizar
                                Certificado</button>
                        </a>
                    </li>

                    <li class="li rigth qualificacao_rigth">
                        <div class="header_qualificacoes">
                            <FaGraduationCap className="icon" />
                            <img src={Marista} alt="Curso Tecnico Informatica" class="curso marista" />
                        </div>
                        <p class="cargo">Ensino Profissionalizante, Informática</p>
                        <p class="descricao">Assistência técnica, testes de funcionamento e monitoramento de sistemas
                            para garantir sua operacionalidade.</p>
                        <p class="conclusao">
                            <giti class="fa-regular fa-calendar-days"></giti> 2014
                        </p>
                
                        <a href="#" target="_blank" class="link"
                            aria-label="Certificado Tecnico Informática">
                            <button class="button_certificado true" target="_blank"
                                aria-label="Visualizar certificado">Visualizar
                                Certificado</button>
                        </a>
                    
                    </li>
                </ul>
                <ul class="lista lista_work" id="work">
                    <li class="li item-work">
                        <div class="header_qualificacoes">
                            <FaBriefcase className="iconWork" />
                            <img src={Litoraneus} alt="Plataforma de intermédio Woarkana" class="curso"
                                width="180rem" />
                        </div>
                        <p class="cargo">Analista de Sistema T.I</p>
                        <p class="descricao">Nesse trabalho, Utilizei diversas
                            linguagens de programação e marcação, como PHP, JavaScript, HTML, CSS, pude
                            contribuir para o desenvolvimento de tabelas
                            personalizadas e dashboards utilizando SQL e Excel, visando a tomada de decisão informada e
                            precisa.
                            Além disso, gerenciei recursos de TI, incluindo usuários, computadores e softwares,
                            fornecendo suporte técnico em diferentes segmentos tecnológicos, e
                            serviços de Active Directory e políticas de segurança foram implementados para garantir a
                            segurança dos dados.</p>
                        <p class="conclusao"><i class="fa-regular fa-calendar-days"></i> 2022 Junho - 2023-(Atualmente)
                        </p>
                    </li>
                    <li class="li item-work">
                        <div class="header_qualificacoes">
                            <FaBriefcase className="iconWork" />
                            <img src={Chesf} alt="Plataforma de intermédio Woarkana"
                                class="curso" width="130rem" />
                        </div>
                        <p class="cargo">Auxiliar Analista de Dados</p>
                        <p class="descricao">Nesse trabalho, pude contribuir Consultas e Administração em banco de dados
                            SQL, Desenvolvimento de Dashboards PowerBI e Excel para monitoramento e análise de dados,
                            Criação de Scripts em VBA para automação de tarefas e melhoria de rotinas.
                        </p>
                        <p class="conclusao"><i class="fa-regular fa-calendar-days"></i> 2021 Janeiro - 2022 Junho </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Qualifications;