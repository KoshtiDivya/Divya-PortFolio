import React, { useEffect, useState } from "react";
import profile from "../assets/divya profile.png";
import { FaDownload } from "react-icons/fa";

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
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));

          if (text === current) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % role.length);
          }
        }
      },
      isDeleting ? 40 : 80
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
        <span className="hello">Hello & Welcome 👋</span>
        <h1 className="introName">
          I'm <span className="gradient-text">Divya</span>
        </h1>
        <div className="role-container">
          <span className="role">{text}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="introPara">
          I build modern, responsive, and user-friendly web applications using
          React, Node.js, and MongoDB. With a strong foundation in frontend
          development and growing backend expertise, I enjoy turning ideas into
          real-world scalable applications.
        </p>
        <p className="introPara text-cyan-400/80 font-medium">
          ✨ Currently open to full-time roles, internships & freelance projects.
        </p>
        <a href="/Divya_Koshti_Resume.pdf" download className="btn-primary">
          <FaDownload />
          Download Resume
        </a>
      </div>

      <div
        className="profile-container"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="profile-img">
          <img src={profile} alt="Divya Koshti Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
