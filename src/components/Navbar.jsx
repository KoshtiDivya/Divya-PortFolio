import React from "react";
import my_logo from "../../public/assets/profile-logos/divya_logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" >

        <div className="container-fluid ">
          <div className="left navbar-header " data-aos="fade-right">
            <a href="">
              <img src={my_logo} alt="Divya" className="logo"/>
            </a>
            <a href="" className="nav_title">
              PortFolio
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse right"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav item-list" data-aos="fade-left">
              <Link activeClass='active' to='intro'spy={true} offset={-100} duration={500} className=" nav-item" aria-current="page" href="#">
                Home
              </Link>
              <Link activeClass='active' to='skills-section'spy={true} offset={-80} duration={500} className="nav-item" href="#">
                Skills
              </Link>
              <Link activeClass='active' to='project-section'spy={true} offset={-100} duration={500} className=" nav-item" href="#">
                Projects
              </Link>
              <Link activeClass='active' to='contact'spy={true} offset={-100} duration={500} className=" nav-item" href="">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
