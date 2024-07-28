import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const hideNav = () => {
    setNavVisible(false);
  };

  return (
    <header>
      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={navVisible ? "show" : ""}>
        <ul onClick={hideNav}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="mailto:bhavana13sree@gmail.com">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
