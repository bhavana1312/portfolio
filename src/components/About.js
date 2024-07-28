import React from "react";
import "./About.css";
import aboutImage from "../assets/img.jpg";

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <div className="about-image-container">
        <img
          src={aboutImage}
          alt="Bhavana Sree Naidu Yeluri"
          className="about-image"
        />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hey there! I'm Bhavana Sree Naidu Yeluri, a computer science
          engineering student at VNR Vignana Jyothi Institute of Engineering and
          Technology, with a keen interest in Artificial Intelligence and
          Machine Learning.
        </p>
        <p>
          My passion lies in leveraging technology to solve real-world problems,
          drawing on a solid foundation in programming languages like C, Java,
          Python, and R, alongside web development skills in HTML, CSS,
          JavaScript, and ReactJS.
        </p>
        <p>
          While I enjoy crafting web applications, my true enthusiasm is in AI
          and Machine Learning, where I excel in pre-processing data, model
          selection, and performance evaluation.
        </p>
        <p>
          By merging my web development and machine learning expertise, I aim to
          create innovative solutions that make a significant impact. If you're
          looking for someone passionate about technology and eager for
          challenges, let's chat!
        </p>
      </div>
    </div>
  </section>
);

export default About;
