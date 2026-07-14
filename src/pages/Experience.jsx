import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";

function Experience() {
  // const experiences = [
  //   {
  //     type: "Freelance",
  //     position: "Digital Marketing",
  //     company: "Karya Indonesia",
  //     period: "2025",
  //     tasks: [
  //       "Content Research",
  //       "Social Media Content",
  //       "Instagram Carousel",
  //       "Caption Strategy",
  //       "Audience Engagement"
  //     ]
  //   },

  //   {
  //     type: "Internship",
  //     position: "Administrative Staff",
  //     company: "Biro Infrastruktur & SDA",
  //     period: "2024",
  //     tasks: [
  //       "Administration",
  //       "Reporting",
  //       "Documentation",
  //       "Data Validation",
  //       "Archiving"
  //     ]
  //   }
  // ];

  return (
    <section className="experience-page">
      <div className="experience-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>

        <h1 className="experience-title">Experience</h1>

        <div className="experience-title-line"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <span className="experience-type">{exp.type}</span>

            <h3>{exp.title}</h3>

            <h4>{exp.company}</h4>

            <p className="experience-period">{exp.year}</p>

            <div className="experience-tags">
              {exp.responsibilities.map((task, i) => (
                <span className="experience-tag" key={i}>
                  {task}
                </span>
              ))}
            </div>
            <Link to={`/experience/${exp.id}`} className="detail-button">
              View Detail →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
