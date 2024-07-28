import React from "react";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-content">
      <div className="project-item">
        <h3>Java Examination Management System</h3>
        <p>
          Devised a system to streamline exam-related tasks, enhancing user
          experiences. Implemented OOP principles such as classes, objects,
          inheritance, and encapsulation to manage data interactions
          effectively. The system reduced administrative overhead by 20%.
        </p>
      </div>
      <div className="project-item">
        <h3>Toxic Content Detection Web Application</h3>
        <p>
          Integrated SVM model with a 94.37% accuracy rate. Implemented a
          platform that scans uploaded documents to ensure workplace safety and
          mitigate harassment.
        </p>
      </div>
      <div className="project-item">
        <h3>E-commerce Application</h3>
        <p>
          Built an e-commerce platform with product listings and a shopping
          cart. Implemented OOP concepts to structure the backend, improving
          code readability and facilitating feature additions.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
