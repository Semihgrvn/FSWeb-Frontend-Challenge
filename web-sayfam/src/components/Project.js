import React from "react";

const data = [
    {
        projectName: "Movies",
        projectImg: "movies.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://fsweb-s10g2-redux-filmler-semihgervan-hotmailcom.vercel.app/movies",
    },
    {
        projectName: "Dogs",
        projectImg: "dogs.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://semih-gervan-fsweb-s10g4-thunk-and-apis-seven.vercel.app/",
    },
    {
        projectName: "Grateful Diary",
        projectImg: "minnet.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://fsweb-s10-challenge-git-main-semihgervan-hotmailcom.vercel.app/",
    },
    {
        projectName: "Calculator",
        projectImg: "calculator.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://semih-gervan-fsweb-s10g1-reducer-calculator-semihgervan.vercel.app/",
    },
    {
        projectName: "Watch List",
        projectImg: "watchlist.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://semih-gervan-fsweb-s10g3-redux-watchlist-semihgervan.vercel.app/",
    },
    {
        projectName: "Shopping Cart",
        projectImg: "shoppingcart.png",
        projectDescription:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        projectProgrammes: ["react", "axios"],
        projectUrl: "https://fsweb-s11g1-shopping-cart-semihgervan.vercel.app/",
    },
];

export default function Project() {
    return (
        <div className="projectsSection">
            <div className="projects">
                <div className="projectsContainer">
                    <h1 className="profile-baslik">Projects</h1>
                    <div className="proje">
                        {data.map((project) => (
                            <div className="box">
                                <img
                                    src={project.projectImg}
                                    alt="projects"
                                    className="projectsPhotos"
                                />
                                <h3 className="content-heading">{project.projectName}</h3>

                                <div className="programs">
                                    <p>react</p>
                                    <p>redux</p>
                                    <p>axios</p>
                                    <p>javascript</p>
                                </div>
                                <div className="links">
                                    <a
                                        href="https://github.com/Semihgrvn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                                        View Site
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}