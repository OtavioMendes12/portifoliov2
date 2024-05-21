import React, { useState } from "react";
import { i18n } from "../../translate/i18n";


import "./styles.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">
            <span className="nav-contact">
                <a href="https://wa.me/+5531973448484" target="_blank" rel="noreferrer">{i18n.t("navbar.privateContact")}</a>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/#home">{i18n.t("navbar.home")}</a>
                <a href="/#about">{i18n.t("navbar.about")}</a>
                <a href="/#skills">{i18n.t("navbar.skills")}</a>
                <a href="/#projects">{i18n.t("navbar.projects")}</a>
                <a href="/#contact">{i18n.t("navbar.contact")}</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};
