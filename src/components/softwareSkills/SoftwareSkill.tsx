import React from "react";
import { skillsSection } from "../../portfolio";
import "./SoftwareSkill.css";

const SoftwareSkill = () => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline">
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
