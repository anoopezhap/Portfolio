import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default HomePage;
