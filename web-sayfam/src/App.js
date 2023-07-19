import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="App">
      <Header />
      <Bio />
      <Skills />
      <Profile />
      <Project />
      <Footer />
    </div>
  );
}

export default App;