import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#050814] min-h-screen text-slate-100">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
