import analytics from "../assets/images/analytics.png";
import dashboard from "../assets/images/dashboard.png";
import python from "../assets/images/python.png";
import database from "../assets/images/database.png";
import report from "../assets/images/report.png";
import frontend from "../assets/images/frontend.png";
import { Link } from "react-router-dom";

function About() {
  const specializations = [
    {
      icon: analytics,
      title: "Data Analysis",
      desc: "Exploring, cleaning, and analyzing data to generate business insights.",
    },
    {
      icon: dashboard,
      title: "Dashboard Visualization",
      desc: "Creating interactive dashboards using Excel and Power BI.",
    },
    {
      icon: python,
      title: "Data Processing",
      desc: "Preparing and transforming data using Python.",
    },
    {
      icon: database,
      title: "SQL Database",
      desc: "Querying, managing, and analyzing relational databases.",
    },
    {
      icon: report,
      title: "Reporting & Insight",
      desc: "Building reports and communicating data-driven findings.",
    },
    {
      icon: frontend,
      title: "Front-End Development",
      desc: "Designing responsive and interactive web interfaces.",
    },
  ];

  return (
    <section className="about">
      <div className="about-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1 className="about-title">About Me</h1>
        <div className="about-title-line"></div>
      </div>

      <div className="about-description">
        <p>
          I am a fresh graduate in Computer Science from Dian Nuswantoro
          University with a strong interest in{" "}
          <strong>Data Analytics and Business Intelligence</strong>. I am
          passionate about transforming data into actionable insights through
          data analysis, visualization, and dashboard development using
          <strong> Excel, SQL, Power BI, and Python</strong>.
        </p>

        <p>
          Besides Data Analytics, I also have a strong foundation in{" "}
          <strong>Web Development</strong>, particularly in Front-End
          Development and UI implementation. To strengthen my technical skills,
          I obtained a<strong> BNSP Web Development Certification</strong>.
        </p>

        <p>
          I am committed to continuous learning and eager to contribute to
          data-driven and technology-oriented environments.
        </p>
        <div className="scroll-hint">↓ My Specializations</div>
      </div>

      <div className="specialization-title">Specialization</div>

      <div className="specialization-grid">
        {specializations.map((item, index) => (
          <div className="specialization-card" key={index}>
            <div className="spec-icon">
              <img src={item.icon} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
