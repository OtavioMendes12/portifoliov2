import { i18n } from "../../translate/i18n";

import './styles.css';

import Blur from "../../assets/icons/blur.png";
import HTML from "../../assets/icons/skils/spring.png";
import CSS from "../../assets/icons/skils/python.png";
import React from "../../assets/icons/skils/docker.png";
import VS from "../../assets/icons/skils/aws.png";
import JS from "../../assets/icons/skils/java.png";
import Node from "../../assets/icons/skils/mysql.png";
import Ps from "../../assets/icons/skils/postgre.png";
import Figma from "../../assets/icons/skils/rpa.png";
import Git from "../../assets/icons/skils/git.png";

export const Skills = () => {
    return (
        <>
            <span id="skills"></span>
            <div className="container-skills">
                <div className="txt">
                    <h3>{i18n.t('skills.focus')}</h3>
                    <p>{i18n.t('skills.p')}</p>
                    <div className="skill-camp">
                        <div className="skill-box">
                            <span>Java</span>
                        </div>
                        <div className="skill-box">
                            <span>Spring Boot</span>
                        </div>
                        <div className="skill-box">
                            <span>AWS Cloud</span>
                        </div>
                        <div className="skill-box">
                            <span>Python</span>
                        </div>
                        <div className="skill-box">
                            <span>Microservices</span>
                        </div>
                        <div className="skill-box">
                            <span>Git</span>
                        </div>
                        <div className="skill-box">
                            <span>API</span>
                        </div>
                        <div className="skill-box">
                            <span>Docker</span>
                        </div>
                        <div className="skill-box">
                            <span>MySQL</span>
                        </div>
                        <div className="skill-box">
                            <span>Postgre</span>
                        </div>
                        <div className="skill-box">
                            <span>RPA</span>
                        </div>
                    </div>
                </div>
                <div className="asset">
                    <img className='blur' src={Blur} alt="Imagem gradiente branco" />
                    <div className="techs">
                        <div className="tech">
                            <img src={HTML} alt="Logo HTML" />
                        </div>
                        <div className="tech">
                            <img src={CSS} alt="Logo CSS" />
                        </div>
                        <div className="tech">
                            <img src={React} alt="Logo React" />
                        </div>
                        <div className="tech">
                            <img src={VS} alt="Logo Visual Studio Code " />
                        </div>
                        <div className="tech">
                            <img src={JS} alt="Logo Java" />
                        </div>
                        <div className="tech">
                            <img src={Node} alt="Logo Node js" />
                        </div>
                        <div className="tech">
                            <img src={Ps} alt="Logo Photoshop" />
                        </div>
                        <div className="tech">
                            <img src={Figma} alt="Logo Figma" />
                        </div>
                        <div className="tech">
                            <img src={Git} alt="Logo Github" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}