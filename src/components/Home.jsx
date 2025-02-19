import React from "react";
import profile from "../../public/assets/profile-logos/divya profile.jpg";
import resume from '../resume/Divya_Resume.pdf';
const Home = () => {
  return (
    <section id="intro">
      <div className="introContent" data-aos="fade-up-right" data-aos-duration="1000">
        <span className="hello">Hello, </span> <br />
        <span>
          I'm <span className="introName">Divya</span> <br />
          Student
        </span>
        <p className="introPara">I am a passionate Web Developer currently pursuing my Bachelor's in IT Engineering (3rd year). I specialize in front-end development and love building responsive, user-friendly websites using React, HTML, CSS, and JavaScript. Excited to explore new technologies and bring creative ideas to life!" </p>
       <a href={resume}><button className="btn"><i className="fa-solid fa-download" />Download Resume</button></a>
      </div>
      <div className="profile-img" data-aos="fade-up-left" data-aos-duration="1000">
      <img src={profile} alt="profile"/>
      </div>
     
    </section>
  );
};

export default Home;
