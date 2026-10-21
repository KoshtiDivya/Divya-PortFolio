import React, { useState } from "react";
import my_logo from "../assets/D_logo.png";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="fixed navbar w-full z-50 bg-dark-100/90 py-1 shadow-lg">
        <div className="container-fluid mx-auto flex justify-between items-center bg-[#050814]">
          <div className="left navbar-header" data-aos="">
              <img src={my_logo} alt="Divya" className="logo"/>
              <a href="" className="nav_title">
                 PortFolio
              </a>
          </div>

          <div className="hidden md:flex space-x-10 item-list md:w-[40%]! sm:w-[60%]!">
              <Link activeClass='active' to='intro'spy={true} offset={-100} duration={500} className=" nav-item " aria-current="page" href="#">
                Home
              </Link>
              <Link
  activeClass="active"
  to="skills-section"
  spy={true}
  isDynamic={true}
  offset={-100}
  duration={500}
  className="nav-item"
>
  Skills
</Link>
           <Link
  activeClass="active"
  to="experience-section"
  spy={true}
  offset={-100}
  duration={500}
  className="nav-item"
>
  Experience
</Link>

<Link
  activeClass="active"
  to="project-section"
  spy={true}
  isDynamic={true}
  offset={-100}
  duration={500}
  className="nav-item"
>
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
            <div className="md:hidden mt-0 bg-[#050814] w-full h-screen rounded-lg px-4 flex flex-col gap-4">
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='intro'spy={true} offset={-100} duration={500} className=" nav-item pt-2 mx-5!" aria-current="page" href="#">
                Home
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='skills-section'spy={true} offset={-100} duration={500} className="nav-item pt-2 mx-5!" href="#">
                Skills
              </Link>
               <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='experience-section'spy={true} offset={-100} duration={500} className="nav-item pt-2 mx-5!" href="#">
                Experiance
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='project-section'spy={true} offset={-100} duration={500} className=" nav-item pt-2 mx-5!" href="#">
                Projects
              </Link>
              <Link onClick={() => setShowMenu(!showMenu)} activeClass='active' to='contact'spy={true} offset={-100} duration={500} className=" nav-item pt-2 mx-5!" href="#">
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
