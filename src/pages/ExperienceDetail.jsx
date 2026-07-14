import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { experiences } from "../data/experiences";

function ExperienceDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();
  const [animate, setAnimate] = useState(false);
  const experience = experiences.find((item) => item.id === id);

  // AUTO SLIDER
  useEffect(() => {
    if (!experience?.gallery) return;

    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setCurrentImage((prev) =>
          prev === experience.gallery.length - 1 ? 0 : prev + 1,
        );

        setAnimate(false);
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, [experience]);

  if (!experience) return <h1>Not Found</h1>;

  return (
    <section className="experience-detail">
      <Link to="/experience" className="back-button">
        ← Back to Experience
      </Link>

      <div className="detail-hero">
        <span className="experience-type">{experience.type}</span>

        <h1>{experience.title}</h1>

        <h2>{experience.company}</h2>

        <p>
          {experience.period}
          {" • "}
          {experience.location}
          {" • "}
          {experience.sistem}
        </p>
      </div>

      <div className="detail-grid">
        {/* LEFT */}

        <div className="detail-card">
          <h3>About This Experience</h3>

          <p>{experience.about}</p>

          <h3 className="resp-title">Responsibilities</h3>

          <div className="detail-responsibilities">
            {experience.responsibilities.map((item, index) => (
              <div key={index} className="detail-responsibility">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className="gallery-card">
          <img
            src={experience.gallery[currentImage].image}
            alt=""
            className={animate ? "gallery-image animate" : "gallery-image"}
          />

          <div className="gallery-dots">
            {experience.gallery.map((_, index) => (
              <button
                key={index}
                className={currentImage === index ? "dot active" : "dot"}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <p className="gallery-caption">
            {experience.gallery[currentImage].caption}
          </p>
        </div>
      </div>

      {/* TOOLS */}

      <div className="detail-bottom">
        <div className="detail-tools">
          <h3>Tools</h3>

          <div className="detail-tags">
            {experience.tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="detail-tools">
          <h3>Key Learnings</h3>

          <div className="detail-tags">
            {experience.learnings.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceDetail;
