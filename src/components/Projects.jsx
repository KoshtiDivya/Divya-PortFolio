import React from "react";
import project_1 from "../images/project-1.png";
import project_2 from "../images/project-2.png";
import project_3 from "../images/project-3.png";
const Projects = () => {
  return (
    <section id="project-section">
      <h1 className="heading">My Projects</h1>
      <p className="desc">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories. They reflect my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </p>
      <div className="projects">
        <div
          className="project"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img src={project_1} alt="project-1" />
          <p>
            Developed an interactive Tic-Toe-Tac Game using HTML, CSS, and
            JavaScript showcasing skills in creating dynamic and interactive web
            interfaces{" "}
          </p>
          <a href="https://github.com/KoshtiDivya/Tic-tac-toe-Game">
            Click for code
          </a>
        </div>

        <div
          className="project"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img src={project_2} alt="project-2" />
          <p>
            Implemented a global currency converter that handles API data for
            real-time exchange rates, improving accuracy and reliability in
            currency calculations.
          </p>
          <a href="https://github.com/KoshtiDivya/Currency-Converter">
            Click for code
          </a>
        </div>

        <div
          className="project"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <img src={project_3} alt="project-3" />
          <p>
            I created a food recipe website 🥗🍕 using React along with HTML,
            CSS, Bootstrap, and APIs. In this we can enter name of dish and
            fetch recipe of that dish{" "}
          </p>
          <a href="https://github.com/KoshtiDivya/Foodies_recipe">
            Click for code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
