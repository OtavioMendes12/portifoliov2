import { i18n } from "../../translate/i18n";

import './styles.css';

import Linkedin from "../../assets/icons/linkedin.png";
import Whats from "../../assets/icons/whatsapp.png";
import Github from "../../assets/icons/github.png";
import Source from "../../assets/icons/source.png";




export const Contact = () => {
    return (
        <>
            <span id="contact"></span>
            <div className="container-contact">
                <div className="content-contact">
                    <p className='p-contact'>{i18n.t('contact.send')}</p>
                </div>
                <div className="content-contact-text">
                    <a href="mailto:otaviojulio.mendes@gmail.com?subject=CONTATO BY PORTFOLIO">
                        <h5>otaviojulio.mendes@gmail.com</h5>
                    </a>
                </div>
                <div className="content-contact">
                    <p className='p-title'>{i18n.t('contact.follow')}</p>
                </div>
                <div className="content-contact-image">
                    <a href="https://wa.me/+5531973448484" target="_blank" rel="noreferrer">
                        <img src={Whats} alt="WhatsApp" />
                    </a>

                    <a href="https://www.linkedin.com/in/otavio-mendes" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>

                    <a href="https://github.com/OtavioMendes12" target="_blank" rel="noreferrer">
                        <img src={Github} alt="Github" />
                    </a>

                    <a href="https://otaviomendes.com" target="_blank" rel="noreferrer">
                        <img src={Source} alt="Source" />
                    </a>
                </div>
            </div>
                <hr />
        </>
    );
}