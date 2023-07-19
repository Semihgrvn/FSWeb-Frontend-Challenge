import React from "react";

export default function Profile({ }) {
    return (
        <div className="profileContainer">
            <div className="profile">
                <div className="profile-infoCol">
                    <h1 className="profile-heading">Profile</h1>
                    <div></div>
                    <div className="profile-infoText">
                        <div className="profile-box">
                            <div className="right">
                                <h3 className="content-heading">Profile</h3>
                                <div className="second">
                                    <div className="keys">
                                        <p>Doğum Tarihi</p>
                                        <p>Şehir</p>
                                        <p>Eğitim Durumu</p>
                                        <br />
                                        <br />
                                        <p>Pozisyon</p>
                                    </div>
                                    <div className="values">
                                        <p>18.08.1997</p>
                                        <p>İstanbul</p>
                                        <p>
                                            Dokuz Eylül Üniversitesi, İnşaat Mühendisliği,2021
                                        </p>
                                        <p>Frontend Developer,UI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-box">
                            <div>
                                <h3 className="content-heading">Hakkımda</h3>
                                <p>
                                    Merhaba, ben Semih. 2021 yılında Dokuz Eylül Üniversitesin'den mezun oldum.<br /><br />2023 yılında Workintech kurumundan Full
                                    Stack Web Developer eğitimi aldım. Kod
                                    yazmayı seviyorum. Kariyerime yazılım ile
                                    devam etmekteyim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}