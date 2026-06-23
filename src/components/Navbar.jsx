import React, { useState } from "react";
import my_logo from "../assets/D_logo.png";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="fixed navbar w-full z-50 bg-dark-100/90 backdrop-blur-sm py-1 px-8 shadow-lg">
        <div className="container-fluid mx-auto flex justify-between items-center">
          <div className="left navbar-header" data-aos="">
              <img src={my_logo} alt="Divya" className="logo"/>
              <a href="" className="nav_title">
                 PortFolio
              </a>
          </div>

          <div className="hidden md:flex space-x-10 item-list">
              <Link activeClass='active' to='intro'spy={true} offset={-100} duration={500} className=" nav-item " aria-current="page" href="#">
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

          <div className="md:hidden">
            {
              showMenu
                ? <RxCross1 onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
                : <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>
            }
          </div>
        </div>

        {/* Mobile Menu */}
        {
          showMenu && (
            <div className="md:hidden mt-0 bg-dark-300 w-full h-screen rounded-lg p-4 flex flex-col sp  ">
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='intro'spy={true} offset={-100} duration={500} className=" nav-item pt-2" aria-current="page" href="#">
                Home
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='skills-section'spy={true} offset={-80} duration={500} className="nav-item pt-2" href="#">
                Skills
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='project-section'spy={true} offset={-100} duration={500} className=" nav-item pt-2" href="#">
                Projects
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='contact'spy={true} offset={-100} duration={500} className=" nav-item pt-2" href="">
                Contact Me
              </Link>
            </div>
          )
        }
      </nav>
    </>
  );
};

export default Navbar;
