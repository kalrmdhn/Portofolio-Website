import { Link } from "react-router-dom";

import excel from "../assets/images/excel.png";
import powerbi from "../assets/images/bi.png";
import sql from "../assets/images/sql.png";
import python from "../assets/images/py.png";
import statistics from "../assets/images/dashboard.png";
import dataviz from "../assets/images/analytics.png";

import php from "../assets/images/php.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import laravel from "../assets/images/laravel.png";
import ci from "../assets/images/ci.png";

import problem from "../assets/images/problem.png";
import communication from "../assets/images/communication.png";
import teamwork from "../assets/images/team.png";
import critical from "../assets/images/critical.png";
import time from "../assets/images/time.png";
import patience from "../assets/images/patience.png";

import analyticsCategory from "../assets/images/data.png";
import developmentCategory from "../assets/images/dev.png";
import professionalCategory from "../assets/images/soft.png";

function SkillGrid({ image, title, data }) {
  return (
    <>
      <div className="skills-category">
        <img src={image} alt={title} className="category-image" />
        <h3>{title}</h3>
      </div>

      <div className="skills-grid">
        {data.map((item, index) => (
          <div className="skill-box" key={index}>
            <div className="shine"></div>
            <img src={item.icon} alt={item.name} />

            <h4>{item.name}</h4>

            <span>{item.level}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function Skills() {
  const analytics = [
    {
      icon: excel,
      name: "Excel",
      level: "Advanced",
    },
    {
      icon: powerbi,
      name: "Power BI",
      level: "Intermediate",
    },
    {
      icon: sql,
      name: "SQL",
      level: "Intermediate",
    },
    {
      icon: python,
      name: "Python",
      level: "Intermediate",
    },
    {
      icon: statistics,
      name: "Statistics",
      level: "Intermediate",
    },
    {
      icon: dataviz,
      name: "Data Visualization",
      level: "Advanced",
    },
  ];

  const development = [
    {
      icon: php,
      name: "PHP",
      level: "Intermediate",
    },
    {
      icon: css,
      name: "CSS",
      level: "Advanced",
    },
    {
      icon: javascript,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: react,
      name: "React",
      level: "Intermediate",
    },
    {
      icon: laravel,
      name: "Laravel",
      level: "Intermediate",
    },
    {
      icon: ci,
      name: "Codeigniter",
      level: "Advanced",
    },
  ];

  const softskills = [
    {
      icon: problem,
      name: "Problem Solving",
      level: "Strong",
    },
    {
      icon: communication,
      name: "Communication",
      level: "Strong",
    },
    {
      icon: teamwork,
      name: "Teamwork",
      level: "Strong",
    },
    {
      icon: critical,
      name: "Critical Thingking",
      level: "Strong",
    },
    {
      icon: time,
      name: "Time Management",
      level: "Strong",
    },
    {
      icon: patience,
      name: "Patience",
      level: "Strong",
    },
  ];

  return (
    <section className="skills-page">
      <div className="skills-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>

        <h1 className="skills-title">Skills</h1>

        <div className="skills-title-line"></div>
      </div>

      <SkillGrid
        image={analyticsCategory}
        title="Data Analytics"
        data={analytics}
      />

      <SkillGrid
        image={developmentCategory}
        title="Development"
        data={development}
      />

      <SkillGrid
        image={professionalCategory}
        title="Professional Skills"
        data={softskills}
      />
    </section>
  );
}

export default Skills;
