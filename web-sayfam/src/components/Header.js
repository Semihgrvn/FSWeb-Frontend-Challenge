import React from "react";
import { Link } from "react-scroll";

export default function Header() {
    return (
        <div className="headersection">
            <div className="header">
                <img src="logo.png"></img>
                <div className="nav">

                    <Link to="skillsContainer" smooth={true} duration={550}>
                        Yetenekler
                    </Link>

                    <Link to="projectsSection" smooth={true} duration={650}>
                        Projeler
                    </Link>

                    <Link to="footer" smooth={true} duration={750}>
                        İletişim
                    </Link>

                </div>
            </div>
        </div>
    );
}