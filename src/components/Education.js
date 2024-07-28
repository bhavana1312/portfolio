import React from "react";
import "./Education.css";

const Education = () => (
  <section id="education" className="education-section">
    <h2>My Journey</h2>
    <div className="education-content">
      <div className="education-item">
        <h3>VNR Vignana Jyothi Institute of Engineering and Technology</h3>
        <p>2022 - Present</p>
        <p>
          Computer Science and Engineering (Artificial Intelligence and Machine
          Learning) - CGPA: 9.37/10.0
        </p>
      </div>
      <div className="education-item">
        <h3>Sri Chaitanya Junior College</h3>
        <p>2020 - 2022</p>
        <p>Class 12th - 98.5%</p>
      </div>
      <div className="education-item">
        <h3>St. Joseph’s School</h3>
        <p>2010 - 2020</p>
        <p>Class 10th - 93.6%</p>
      </div>
    </div>
  </section>
);

export default Education;
