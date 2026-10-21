import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {new Date().getFullYear()} <span className="gradient-text font-semibold">Divya Koshti</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
