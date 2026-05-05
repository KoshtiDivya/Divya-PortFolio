import Home from "./components/Home";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./components/Skills";
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
    Aos.init();
   },[])
  return (
    <>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      </>
  )
}

export default App
