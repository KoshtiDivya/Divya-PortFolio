import React, { useEffect, useState } from "react";
import profile from "../assets/divya profile.jpg";
import resume from '../resume/Divya_Koshti_Resume.pdf';
const role = ['“Frontend Developer”', '“Full Stack (MERN) Developer”'];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = role[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text == current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text == "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % role.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
  return (
    <section id="intro">
      <div className="introContent" data-aos="fade-up-right" data-aos-duration="1000">
        <span className="hello">Hello, </span> <br />
        <span>
          I'm <span className="introName">Divya</span> <br />
          <span className="role">{text}</span>
          <span className="role">|</span>
        </span>
        <p className="introPara">I build modern, responsive, and user-friendly web applications using React, Node.js, and MongoDB.  With a strong foundation in frontend development and growing backend expertise, I enjoy turning ideas into real-world applications.</p>
        <p className="introPara">Currently open to internships and freelance opportunities.</p>
       <a href={resume}><button className="btn"><i className="fa-solid fa-download" />Download Resume</button></a>
      </div>
      <div className="profile-img" data-aos="fade-up-left" data-aos-duration="1000">
      <img src={profile} alt="profile"/>
      </div>
     
    </section>
  );
};

export default Home;
