import React from "react";
import { Link } from "react-scroll";

// export default function Bio({ }) {
//     return (
//         <div className="heroSection">
//             <div className="hero">
//                 <div className="hero-left">
//                     <div className="name">
//                         <div className="line">
//                             <h5 className="name-line">___________</h5>
//                             <h5>Semih Gervan</h5>
//                         </div>
//                     </div>

//                     <h1 className="heading">
//                         Yaratıcı düşünür
//                         <br />
//                         Minimalizm Aşığı
//                     </h1>

//                     <p className="intro">
//                         Merhaba, ben Semih. Ben bir full-stack geliştiricisiyim. Eğer
//                         sağlam ve ölçeklenebilir bir web sayfası tasarlamak isterseniz
//                         benimle iletişime geçebilirsiniz.
//                     </p>

//                     <div className="buttons">
//                         <div className="hire-button">
//                             <Link to="footer" smooth={true} duration={750}>

//                                 <p className="hiremeText">Bana ulaşın</p>

//                             </Link>
//                         </div>

//                         <div className="github-button">
//                             <img src="github.png" alt="github" />{" "}
//                             <a href="https://github.com/Semihgrvn" target="_blank">
//                                 Github
//                             </a>
//                         </div>
//                         <div className="linkedin-button">
//                             <img src="LinkedIn.png" alt="linkedin" />
//                             <a
//                                 href="https://www.linkedin.com/in/semih-gervan-a66476187/"
//                                 target="_blank"
//                             >
//                                 Linkedin
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <img
//                     className="bio-image"
//                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsanliturk.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fyazilimcilara-mali-denetim-815x550.jpg&f=1&nofb=1&ipt=7203bcaf956bb9d8dfd0621bc7ccf379852415a4831e4efeda2dd29d7fda4653&ipo=images"
//                     alt="profile"
//                 />
//             </div>
//         </div>
//     );
// }



export default function Bio({ language }) {
    return (
        <div className="heroSection">
            <div className="hero">
                <div className="hero-left">
                    <div className="name">
                        <div className="line">
                            <h5 className="name-line">___________</h5>
                            <h5>Semih Gervan</h5>
                        </div>
                    </div>
                    {language === "en" ? (
                        <h1 className="heading">
                            Creative thinker <br />
                            Minimalism lover
                        </h1>
                    ) : (
                        <h1 className="heading">
                            Yaratıcı düşünür
                            <br />
                            Minimalizm Aşığı
                        </h1>
                    )}
                    {language === "en" ? (
                        <p className="intro">
                            Hello, I'm Semih. I'm a full-stack developer. If
                            If you want to create a solid and divisible web page
                            you can contact me.

                        </p>
                    ) : (
                        <p className="intro">
                            Merhaba, ben Semih. Ben bir full-stack geliştiricisiyim. Eğer
                            sağlam ve ölçeklenebilir bir web sayfası tasarlamak isterseniz
                            benimle iletişime geçebilirsiniz.
                        </p>
                    )}
                    <div className="buttons">
                        <div className="hire-button">
                            <Link to="footer">
                                {language === "en" ? (
                                    <p className="hiremeText">Contact me</p>
                                ) : (
                                    <p className="hiremeText">Bana ulaşın</p>
                                )}
                            </Link>
                        </div>

                        <div className="github-button">
                            <img src="github.png" alt="github" />{" "}
                            <a href="https://github.com/Semihgrvn" target="_blank">
                                Github
                            </a>
                        </div>
                        <div className="linkedin-button">
                            <img src="LinkedIn.png" alt="linkedin" />
                            <a
                                href="https://www.linkedin.com/in/semih-gervan-a66476187/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
                <img className="bio-image"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsanliturk.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fyazilimcilara-mali-denetim-815x550.jpg&f=1&nofb=1&ipt=7203bcaf956bb9d8dfd0621bc7ccf379852415a4831e4efeda2dd29d7fda4653&ipo=images"
                    alt="profile" />
            </div>
        </div>
    );
}