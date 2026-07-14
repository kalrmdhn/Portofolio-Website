import profile from "../assets/images/transparan.png";
import excel from "../assets/images/excel.png";
import bi from "../assets/images/bi.png";
import sql from "../assets/images/sql.png";
import py from "../assets/images/py.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <div className="hero-tag">Data Analyst Enthusiast</div>

        <h1 className="hero-title">
          Halo, saya <br />
          <span className="hero-name">Haekal Akmal Ramadhan</span>
        </h1>

        <div className="hero-buttons">
          <Link to="projects" className="btn-primary">
            View Project
          </Link>
          <Link to="contact" className="btn-secondary">
            Contact Me
          </Link>
          {/* <button className="btn-primary">View Projects</button>

          <button className="btn-secondary">Contact Me</button> */}
        </div>

        <div className="hero-skills">
          <div className="skill-card">
            <img src={excel} alt="Excel" />
            <span>Excel</span>
          </div>

          <div className="skill-card">
            <img src={bi} alt="Power BI" />
            <span>Power BI</span>
          </div>

          <div className="skill-card">
            <img src={sql} alt="SQL" />
            <span>SQL</span>
          </div>

          <div className="skill-card">
            <img src={py} alt="Python" />
            <span>Python</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-border">
          <img src={profile} alt="profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
