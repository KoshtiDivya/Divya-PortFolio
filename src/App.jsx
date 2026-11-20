import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";
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
    <div className="app-shell">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SEOHead
                title="Divya Koshti | React Developer & Frontend Developer in Ahmedabad"
                description="Portfolio of Divya Koshti, React Developer and Frontend Developer based in Ahmedabad, Gujarat. Specializing in React.js, JavaScript, Tailwind CSS, and MERN stack web applications."
                canonicalUrl="https://divya-koshti.netlify.app/"
              />
              <Navbar />
              <main>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>
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
