import { useEffect, useState } from "react";
import profile from "../images/optimized/divya profile.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const role = [
  "Frontend Developer",
  "Full Stack (MERN) Developer",
  "React Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = role[index];
    const timeout = setTimeout(
      () => {
        if (isDeleting && text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % role.length);
        } else if (isDeleting) {
          setText(current.substring(0, text.length - 1));
        } else if (text === current) {
          setIsDeleting(true);
        } else {
          setText(current.substring(0, text.length + 1));
        }
      },
      isDeleting ? 40 : text === current ? 1500 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section id="intro">
      <div
        className="introContent"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <span className="availability-pill">
          <span className="availability-dot" />
          Open to opportunities
        </span>
        <p className="hello">Hello, I’m</p>
        <h1 className="introName">
          Divya Koshti<span className="intro-period">.</span>
        </h1>
        <div className="role-container">
          <span className="role">{text}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="introPara">
          I create modern, responsive web experiences with React, Node.js, and
          MongoDB—turning thoughtful ideas into useful, polished products.
        </p>
        <div className="hero-actions">
          <a href="/Divya_Koshti_Resume.pdf" download className="btn-primary">
            <FaDownload aria-hidden="true" />
            Download Resume
          </a>
          <Link
            to="project-section"
            smooth={true}
            offset={-100}
            duration={500}
            className="hero-link"
          >
            Explore my work <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div
        className="profile-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="profile-img">
          <img
            src={profile}
            alt="Divya Koshti Profile"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
