import React, { useState, useEffect } from "react";
import "./Home.css";
import resume from "../assets/Bhavana_Sree_Naidu_Yeluri_Resume.pdf"; // Adjust the path accordingly
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const roles = ["AIML Enthusiast", "MERN Stack Developer", "Problem Solver"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;
    if (!isDeleting) {
      if (displayedRole.length < roles[currentRole].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedRole(
            roles[currentRole].substring(0, displayedRole.length + 1)
          );
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        deletingTimeout = setTimeout(() => {
          setDisplayedRole(
            roles[currentRole].substring(0, displayedRole.length - 1)
          );
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayedRole, isDeleting, currentRole]);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am Bhavana Sree Naidu Yeluri,</p>
        <p className="dynamic-text">{displayedRole}</p>
        <a
          href={resume}
          download="Bhavana_Sree_Naidu_Yeluri_Resume.pdf"
          className="btn resume-btn"
        >
          Download Resume
        </a>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bhavana-sree-131225s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/bhavana1312"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:bhavana13sree@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
