import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import Work from "./components/Work";
import Contact from "./components/Contact";
import List from "./components/List"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bottom from "./components/Bottom";




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
