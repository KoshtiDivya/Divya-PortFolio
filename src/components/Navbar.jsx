import { useState } from "react";
import my_logo from "../assets/D_logo.png";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", target: "intro" },
  { label: "Skills", target: "skills-section" },
  { label: "Experience", target: "experience-section" },
  { label: "Projects", target: "project-section" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderNavItems = (mobile = false) =>
    navItems.map(({ label, target }) => (
      <Link
        key={target}
        activeClass="active"
        to={target}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="nav-item"
        onClick={mobile ? () => setShowMenu(false) : undefined}
      >
        {label}
      </Link>
    ));

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <a className="brand" href="#intro" aria-label="Divya Koshti, home">
          <img src={my_logo} alt="" className="logo" />
        </a>

        <div className="desktop-nav">{renderNavItems()}</div>

        <div className="navbar-actions">
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setShowMenu((isOpen) => !isOpen)}
            aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-navigation"
          >
            {showMenu ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="mobile-nav" id="mobile-navigation">
          {renderNavItems(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
