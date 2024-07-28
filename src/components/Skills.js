import React, { useState } from "react";
import "./Skills.css";
import Modal from "./Modal";

const Skills = () => {
  const [openModal, setOpenModal] = useState(null);

  const skillsData = {
    "Programming Languages": ["C", "Java", "Python", "R"],
    "Object-Oriented Programming (OOP)": [
      "Classes",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
    ],
    "Web Technologies": [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    Databases: ["Oracle Database", "MongoDB"],
    "Development Frameworks and Libraries": ["Redux (JavaScript)"],
    "Data Structures and Algorithms": ["Arrays", "Linked Lists", "Stacks", "Queues", "Hash Tables", "Sorting Algorithms", "Searching Algorithms", "Recursion", "Divide and Conquer", "Backtracking" ],
    "Version Control": ["Git", "GitHub"],
  };

  const handleOpenModal = (category) => {
    setOpenModal(category);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className="skill-button"
            onClick={() => handleOpenModal(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {openModal && (
        <Modal onClose={handleCloseModal}>
          <h3>{openModal}</h3>
          <ul>
            {skillsData[openModal].map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Modal>
      )}
    </section>
  );
};

export default Skills;
