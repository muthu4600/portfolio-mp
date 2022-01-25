import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
      <Education />
      <Skills/>
      <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
