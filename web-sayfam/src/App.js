
import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";


// default olarak "en" başlatıyorum sonrasında setLanguage' den gelen veriye göre language i güncelliyorum.
function App() {
  const [language, setLanguage] = useState("en");


  //localStorage' da kullanıcının seçtiği dil seçeneğini kaydediyorum ve bir sonraki girişinde hatırlanmasını sağlıyorum. 
  //Ayrıca ilk kez oluşturulduğunda kullanılmasını sağlıyorum (Mounting fazı)
  //

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // dil değiştirme seçeneğini handleLanguageChange fonksiyonu ile alıyorum. 
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  //ModeSwitch' i render ediyorum, Bu fonksiyon dil değiştirme seçeneklerini içeriyor.
  return (
    <div className="App">
      <ModeSwitch
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
      <Header language={language} />
      <Bio language={language} />
      <div id="skills"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="project"></div>
      <Project language={language} />
      <div id="footer"></div>
      <Footer language={language} />
    </div>
  );
}

export default App;






/*

import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  // Tarayıcının dilini alın
  const userLanguage = navigator.language || navigator.userLanguage;

  // Dil state'i
  const [language, setLanguage] = useState(userLanguage);

  // localStorage'da kullanıcının seçtiği dil seçeneğini kaydedin ve bir sonraki girişinde hatırlanmasını sağlayın.
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Dil değiştirme seçeneğini handleLanguageChange fonksiyonu ile alın.
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // ModeSwitch'i render edin. Bu fonksiyon dil değiştirme seçeneklerini içerir.
  return (
    <div className="App">
      <ModeSwitch
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
      <Header language={language} />
      <Bio language={language} />
      <div id="skills"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="project"></div>
      <Project language={language} />
      <div id="footer"></div>
      <Footer language={language} />
    </div>
  );
}

export default App;


*/