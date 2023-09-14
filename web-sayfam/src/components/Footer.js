import React from "react";

// export default function Footer({ language }) {
//     return (
//         <div className="footerSection">
//             <div className="footer">
//                 <div className="footerContainer">

//                     <div>
//                         <h2 className="footerText">
//                             Bir Sonraki Projeniz için <br /> Birlikte Çalışalım.
//                         </h2>
//                     </div>

//                     <div className="footerInfo">
//                         <a href="mailto:semihgervan@hotmail.com" className="mail">
//                             👉 semihgervan@hotmail.com
//                         </a>

//                         <div className="links-footer">
//                             {language === "en" ? <p>Personal Blog</p> : <p>Kişisel Blog</p>}
//                             <a
//                                 href="https://github.com/Semihgrvn"
//                                 className="githubFooter"
//                                 target="_blank"
//                             >
//                                 Github
//                             </a>
//                             <a
//                                 href="https://www.linkedin.com/in/semih-gervan-a66476187/"
//                                 className="linkedinFooter"
//                                 target="_blank"
//                             >
//                                 Linkedin
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default function Footer({ language }) {
    return (
        <div className="footerSection">
            <div className="footer">
                <div className="footerContainer">
                    {language === "en" ? (
                        <div>
                            <h2 className="footerText">
                                Let’s work together on <br /> your next product.
                            </h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="footerText">
                                Bir Sonraki Projeniz için <br /> Birlikte Çalışalım.
                            </h2>
                        </div>
                    )}
                    <div className="footerInfo">
                        <a href="mailto:semihgervan@hotmail.com" className="mail">
                            👉 semihgervan@hotmail.com
                        </a>

                        <div className="links-footer">
                            {language === "en" ? <p>Personal Blog</p> : <p>Kişisel Blog</p>}
                            <a
                                href="https://github.com/Semihgrvn"
                                className="githubFooter"
                                target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/semih-gervan-a66476187/"
                                className="linkedinFooter"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}