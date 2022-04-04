import './App.css';

import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Project"
import Footer from "./components/Footer"


function App() {
  return (
    <div id='home'>
      
      <Main />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
