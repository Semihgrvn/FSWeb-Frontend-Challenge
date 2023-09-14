import React from "react";

// const skillsDataTr = [
//     {
//         name: "JavaScript",
//         description:
//             " JavaScript, geliştiricilerin etkileşimli web sayfaları oluşturmak için kullandığı bir programlama dilidir. JavaScript işlevleri, sosyal medya akışlarını yenilemekten animasyonlar ve etkileşimli haritalar göstermeye kadar, bir web sitesi kullanıcısının deneyimini iyileştirebilir. İstemci tarafındaki bir betik dili olarak, World Wide Web'in temel teknolojilerinden biridir.",
//     },
//     {
//         name: "React.Js",
//         description:
//             " ReactJS, geliştiriciler tarafından web uygulamaları için kullanıcı arayüzleri oluşturmak amacıyla kullanılan güçlü bir JavaScript kütüphanesidir.",
//     },
//     {
//         name: "Html",
//         description:
//             "HTML ( Hyper Text Markup Language) yani web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir. ",
//     },
//     {
//         name: "CSS",
//         description:
//             "CSS (Basamaklı Stil Sayfaları), HTML veya XML'de yazılmış bir belgenin sunumunu tanımlamak için kullanılan bir stil dilidir. Düzen, renkler, yazı tipleri ve diğer görsel öğeler dahil olmak üzere içeriğin web sayfasında nasıl görüntülendiğini tanımlar.",
//     },
//     {
//         name: "Redux",
//         description:
//             "Redux, JavaScript uygulamaları için öngörülebilir bir durum yönetimi kitaplığıdır. Geliştiricilerin uygulama durumunu merkezi bir mağazada yönetmesine olanak tanıyarak karmaşık uygulamaların durumunu korumayı, hata ayıklamayı ve test etmeyi kolaylaştırır.",
//     },
//     {
//         name: "Cypress",
//         description:
//             "Cypress, modern web uygulamaları için tasarlanmış açık kaynak bir front-end test aracıdır. Ayrıca testlerin javascript ile yazıldığı, açık kaynak bir test otomasyon aracıdır.",
//     },
// ];

// export default function Skills({ language }) {
//     return language === "en" ? (
//         <div className="skillsContainer">
//             {/* <div className="skillsContent">
//                 <h3 className="heading-list">Skills</h3>
//                 <div className="skills">
//                 </div> */}
//         </div>
//         // </div >
//     ) : (
//         <div className="skillsContainer">
//             <div className="skillsContent">
//                 <h3 className="heading-list">Yetenekler</h3>
//                 <div className="skills">
//                     {skillsDataTr.map((skill) => (
//                         <div className="list" key={skill.name}>
//                             <div className="skill-heading">
//                                 <div className="skill-list">
//                                     <div className="js">
//                                         <h3>{skill.name}</h3>
//                                         <p>{skill.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }





const skillsData = [
    {
        name: "JavaScript",
        description:
            "JavaScript is a programming language used to create dynamic behaviors on web pages. It can be used on both client-side (i.e., in the browser) and server-side (Node.js) environments. ",
    },
    {
        name: "React.Js",
        description:
            "React.js is a popular open-source JavaScript library used for building user interfaces (UIs). It allows developers to create reusable UI components.",
    },
    {
        name: "Node.Js",
        description:
            "Node.js is a popular open-source JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is designed for building scalable and high-performance.",
    },
    {
        name: "CSS",
        description:
            "CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML or XML. It defines how the content is displayed on the web page, including layout, colors, fonts, and other visual elements.",
    },
    {
        name: "Redux",
        description:
            "Redux is a predictable state management library for JavaScript applications. It allows developers to manage the application state in a centralized store, making it easy to maintain, debug and test the state of complex applications.",
    },
    {
        name: "Cypress",
        description:
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    },
];

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
        name: "Node.Js",
        description:
            "Node.js, web ve mobil uygulamaları destekleyen arka uç hizmetleri oluşturmak için çok uygundur. Sağlam ve ölçeklenebilir web sunucuları ve API'ler oluşturmayı kolaylaştıran Express.js gibi zengin bir paket ve çerçeve ekosistemi sağlar.",
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
            <div className="skillsContent">
                <h3 className="heading-list">Skills</h3>
                <div className="skills">
                    {skillsData.map((skill) => (
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