import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />
      <div className="p-5 md:px-[15%]">
        <Skills />
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
