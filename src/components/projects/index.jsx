import { useState } from "react";

import { i18n } from "../../translate/i18n";

import Modal from "react-modal/lib/components/Modal";

import './styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Share from "../../assets/icons/share.png";
import More from "../../assets/photos/foto-capa-modal-morepost.png";

//modal imports

import TodoList from "../../assets/photos/projects/todolist/site todo.png";
import TodoList1 from "../../assets/photos/projects/todolist/Codigo Todo List.jpg";


import Treinaai from "../../assets/photos/projects/treinaai/Treina ai .jpg";
import ArquiteturaHexa from "../../assets/photos/projects/arquiteturahexa/codigoBankTransfer.png";

import TransferEstatistica from "../../assets/photos/projects/transferEstatistica/TransferEstatistica.png";


import Portfolio from "../../assets/photos/projects/portfolio/portifolio.jpg";
import Portfolio1 from "../../assets/photos/projects/portfolio/codigo Portifolio.jpg";

import SapatoFacil from "../../assets/photos/projects/sapatoFacil/sapatoFacil.png"


import TransacaoEstatistica from "../../assets/photos/projects/TransacaoEstatistica/SistemaTransferenciaGO.png"



Modal.setAppElement("#root");

export const Projects = () => {

    const [modalOneIsOpen, setOneIsOpen] = useState(false);
    const [modalTwoIsOpen, setTwoIsOpen] = useState(false);
    const [modalTreIsOpen, setTreIsOpen] = useState(false);
    const [modalForIsOpen, setForIsOpen] = useState(false);


    function openModalOne() {
        setOneIsOpen(true);
    }

    function closeModalOne() {
        setOneIsOpen(false);
    }

    function openModalTwo() {
        setTwoIsOpen(true);
    }

    function closeModalTwo() {
        setTwoIsOpen(false);
    }
    function openModalTre() {
        setTreIsOpen(true);
    }

    function closeModalTre() {
        setTreIsOpen(false);
    }

    function openModalFor() {
        setForIsOpen(true);
    }

    function closeModalFor() {
        setForIsOpen(false);
    }

    return (
        <>
            <span id="projects"></span>
            <div className="container-projects">
                <div className="txt-projects">
                    <div className="p-title">{i18n.t('projects.project')}</div>
                    <h4>{i18n.t('projects.development')}</h4>
                </div>
                <div className="grid-projects">
                    <div className="project">
                        <img src={TodoList} alt="TodoList" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalOne} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalOneIsOpen}
                                    onRequestClose={closeModalOne}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={TodoList} alt="mockup site logo1" /></SwiperSlide>
                                        <SwiperSlide><img src={TodoList1} alt="mockup site logo" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Todo List</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Spring Boot</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>IntelliJ</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>MySQL</span>
                                        </div>
                                    
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                    
                                    </div>
                                    <div className="content-link">
                                        <a href="https://github.com/OtavioMendes12/Todo-List" target='_blank' rel='noreferrer' >https://github.com/OtavioMendes12/Todo-List</a>
                                        <img className="share" src={Share} alt="Share" />
                                    </div>
                                    <button onClick={closeModalOne}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={SapatoFacil} alt="SapatoFacil" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTwo} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalTwoIsOpen}
                                    onRequestClose={closeModalTwo}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={SapatoFacil} alt="mockup site logo" /></SwiperSlide>
                                    </Swiper>
                                    <h4>SapatoFacil - Loja de Sapatos</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>TypeScript</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Java</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Spring Boot</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Banco de Dados</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>JWT Authorization</span>
                                        </div>
                                        
                                    </div>
                                    <div className="content-link">
                                        <a href="https://sapato-facil-0c8377071d00.herokuapp.com" target='_blank' rel='noreferrer' >https://sapato-facil-0c8377071d00.herokuapp.com</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTwo}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={TransacaoEstatistica} alt="SistemaBancario" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTwo} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalTwoIsOpen}
                                    onRequestClose={closeModalTwo}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={TransacaoEstatistica} alt="mockup site logo" /></SwiperSlide>
                                    
                                    </Swiper>
                                    <h4>Sistema de Transferencia Bancaria - Otávio Mendes</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>GO Lang</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>MySQL</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>MongoDB</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>MicroService</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://github.com/OtavioMendes12/Sistema-de-Transferencia-Bancaria" target='_blank' rel='noreferrer' >https://github.com/OtavioMendes12/Sistema-de-Transferencia-Bancaria</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTwo}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src={Portfolio} alt="Portfolio" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTwo} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalTwoIsOpen}
                                    onRequestClose={closeModalTwo}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={Portfolio} alt="mockup site logo" /></SwiperSlide>
                                        <SwiperSlide><img src={Portfolio1} alt="mockup site desktop" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Portfolio - Otávio Mendes</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java Script</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Visual Studio Code</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SEO</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>UI</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Photoshop</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Git</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Github</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Netlifly</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://otaviomendes.com" target='_blank' rel='noreferrer' >https://otaviomendes.com</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTwo}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={Treinaai} alt="Treina Aí" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTre} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalTreIsOpen}
                                    onRequestClose={closeModalTre}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={Treinaai} alt="mockup site logo" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Treina Aí</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java Script</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>HTML 5</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>CSS 3</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>React</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>TypeScript</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Axios</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Node.js</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Vercel</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>Sql server</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://github.com/OtavioMendes12/PLATAFORMA-PARA-ESTAGIARIO" target='_blank' rel='noreferrer' >https://github.com/OtavioMendes12/PLATAFORMA-PARA-ESTAGIARIO</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTre}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={TransferEstatistica} alt="Treina Aí" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalTre} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>
                                <Modal
                                    isOpen={modalTreIsOpen}
                                    onRequestClose={closeModalTre}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={TransferEstatistica} alt="mockup site logo" /></SwiperSlide>
                                    </Swiper>
                                    <h4>Desafio Backend Itaú</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>Java</span>
                                        </div>
                                        <div className="skill-box">
                                            <span>SpringBoot</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://github.com/OtavioMendes12/Transacoes-e-Estatisticas-Java" target='_blank' rel='noreferrer' >https://github.com/OtavioMendes12/Transacoes-e-Estatisticas-Java</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalTre}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src={ArquiteturaHexa} alt="Turnflix" />
                        <div className="drop">
                            <div className="text">
                                <button onClick={openModalFor} className="btn-down"><p>{i18n.t('projects.seemore')}</p></button>

                                <Modal
                                    isOpen={modalForIsOpen}
                                    onRequestClose={closeModalFor}
                                    contentLabel="Modal Example"
                                    overLayClassName="modal-overlay"
                                    className="modal-content"
                                >
                                    <Swiper
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        loop={true}
                                        slidesPerView={1}
                                        autoplay={{ delay: 5000 }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        <SwiperSlide><img src={ArquiteturaHexa} alt="mockup site logo" /></SwiperSlide>
                                       
                                    </Swiper>
                                    <h4>Sistema de Transferencia Bancária</h4>
                                    <hr />
                                    <div className="skill-camp">
                                        <div className="skill-box">
                                            <span>GOLANG</span>
                                        </div>
                                    
                                        <div className="skill-box">
                                            <span>Arquitetura Hexagona</span>
                                        </div>
                                    </div>
                                    <div className="content-link">
                                        <a href="https://github.com/OtavioMendes12/Sistema-de-Transferencia-Bancaria" target='_blank' rel='noreferrer' >https://github.com/OtavioMendes12/Sistema-de-Transferencia-Bancaria</a>
                                        <img className="share" src={Share} alt="" />
                                    </div>
                                    <button onClick={closeModalFor}><p>{i18n.t('projects.modal_button')}</p></button>
                                    <span className="version">{i18n.t('projects.modal_warning')}</span>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="more">
                            <img src={More} alt="More" />
                        </div>
                    </div>


                </div>
            </div >
            <hr />
        </>
    );
}