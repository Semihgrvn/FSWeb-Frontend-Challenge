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
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

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