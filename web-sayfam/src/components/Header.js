import React from "react";
import { Link } from "react-scroll";

// export default function Header() {
//     return (
//         <div className="headersection">
//             <div className="header">
//                 <img src="logo.png"></img>
//                 <div className="nav">

//                     <Link to="skillsContainer" smooth={true} duration={550}>
//                         Yetenekler
//                     </Link>

//                     <Link to="projectsSection" smooth={true} duration={650}>
//                         Projeler
//                     </Link>

//                     <Link to="footer" smooth={true} duration={750}>
//                         İletişim
//                     </Link>

//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Header({ language }) {
    return (
        <div className="headersection">
            <div className="header">
                <img src="logo.png"></img>
                <div className="nav">
                    {language === "en" ? (
                        <Link to="skills" smooth={true} duration={400}>
                            Skills
                        </Link>
                    ) : (
                        <Link to="skills" smooth={true} duration={400}>
                            Yetenekler
                        </Link>
                    )}
                    {language === "en" ? (
                        <Link to="project" smooth={true} duration={400}>
                            Projects
                        </Link>
                    ) : (
                        <Link to="project" smooth={true} duration={400}>
                            Projeler
                        </Link>
                    )}
                    {language === "en" ? (
                        <Link
                            to="footer"
                            smooth={true}
                            duration={400}
                            className="background"
                        >
                            <p>Contact</p>
                        </Link>
                    ) : (
                        <Link
                            to="footer"
                            smooth={true}
                            duration={400}
                            className="background"
                        >
                            <p>İletişim</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}