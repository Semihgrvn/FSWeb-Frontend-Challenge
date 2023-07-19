import React from "react";

const skillsDataTr = [
    {
        name: "JavaScript",
        description:
            " JavaScript, geliştiricilerin etkileşimli web sayfaları oluşturmak için kullandığı bir programlama dilidir. JavaScript işlevleri, sosyal medya akışlarını yenilemekten animasyonlar ve etkileşimli haritalar göstermeye kadar, bir web sitesi kullanıcısının deneyimini iyileştirebilir. İstemci tarafındaki bir betik dili olarak, World Wide Web'in temel teknolojilerinden biridir.",
    },
    {
        name: "React.Js",
        description:
            " ReactJS, geliştiriciler tarafından web uygulamaları için kullanıcı arayüzleri oluşturmak amacıyla kullanılan güçlü bir JavaScript kütüphanesidir.",
    },
    {
        name: "Html",
        description:
            "HTML ( Hyper Text Markup Language) yani web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. ",
    },
    {
        name: "CSS",
        description:
            "CSS (Basamaklı Stil Sayfaları), HTML veya XML'de yazılmış bir belgenin sunumunu tanımlamak için kullanılan bir stil dilidir. Düzen, renkler, yazı tipleri ve diğer görsel öğeler dahil olmak üzere içeriğin web sayfasında nasıl görüntülendiğini tanımlar.",
    },
    {
        name: "Redux",
        description:
            "Redux, JavaScript uygulamaları için öngörülebilir bir durum yönetimi kitaplığıdır. Geliştiricilerin uygulama durumunu merkezi bir mağazada yönetmesine olanak tanıyarak karmaşık uygulamaların durumunu korumayı, hata ayıklamayı ve test etmeyi kolaylaştırır.",
    },
    {
        name: "Cypress",
        description:
            "Cypress, modern web uygulamaları için tasarlanmış açık kaynak bir front-end test aracıdır. Ayrıca testlerin javascript ile yazıldığı, açık kaynak bir test otomasyon aracıdır.",
    },
];

export default function Skills({ language }) {
    return language === "en" ? (
        <div className="skillsContainer">
            {/* <div className="skillsContent">
                <h3 className="heading-list">Skills</h3>
                <div className="skills">
                </div> */}
        </div>
        // </div >
    ) : (
        <div className="skillsContainer">
            <div className="skillsContent">
                <h3 className="heading-list">Yetenekler</h3>
                <div className="skills">
                    {skillsDataTr.map((skill) => (
                        <div className="list" key={skill.name}>
                            <div className="skill-heading">
                                <div className="skill-list">
                                    <div className="js">
                                        <h3>{skill.name}</h3>
                                        <p>{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}