import React from "react";
import { useState, useEffect } from "react";

export default function ModeSwitch({ handleLanguageChange, language }) {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        const body = document.body;
        body.classList.toggle("dark-mode", darkMode);
        const footer = document.querySelector(".footerSection");
        footer.classList.toggle("dark-mode", darkMode);
        const bio = document.querySelector(".heading");
        bio.classList.toggle("dark-mode", darkMode);
        const skills = document.querySelector(".heading-list");
        skills.classList.toggle("dark-mode", darkMode);
        const profil = document.querySelector(".profile-heading");
        profil.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
        const project = document.querySelector(".profile-baslik");
        project.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };


    //Anahtarın (toggle) durumu darkMode değişkeni ile izlenir ve kullanıcı anahtarı değiştirdiğinde handleToggle işlevi çağrılır.
    // Bu işlev, darkMode durumunu günceller ve uygulamanın temasını değiştirir.
    return (
        <div className={`App ${darkMode ? "dark-mode" : ""}`}>
            <div className="modeSwitch">
                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        className="toggle-switch-checkbox"
                        onChange={handleToggle}
                        checked={darkMode}
                    />
                    <span className="slider round"></span>
                </label>
                <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
                <div className="modeText">|</div>

//

                {language === "en" ? (
                    <div>
                        <div className="modeText">
                            <span id="lang" onClick={handleLanguageChange}>
                                TÜRKÇE
                            </span>
                            'YE GEÇ
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="modeText">
                            <span id="lang" onClick={handleLanguageChange}>
                                ENGLISH
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}