import { useState } from "react";
import { Link } from "react-router-dom";

const certificates = [
  {
    id: 1,
    title: "Certification of Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi",
    image: "/images/web dev BNSP-1.png",
  },

  {
    id: 2,
    title: "Certificate Data Analyst",
    issuer: "Yureka Education Center",
    image: "/images/Data Analyst YEC-1.png",
  },

  {
    id: 3,
    title: "Certificate Intern",
    issuer: "Sekretariat Daerah Provinsi Jawa Tengah",
    image: "/images/Magang Sekda.png",
  },

  {
    id: 4,
    title: "Certificate TOEFL",
    issuer: "Center for Foreign Language Training",
    image: "/images/TOEFL.png",
  },
];

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <section className="certificate-page">
      <div className="certificate-back">
        <Link to="/" className="certificate-back-btn">
          <span className="certificate-back-icon">←</span>
          <span>Back to Home</span>
        </Link>
      </div>
      {/* HEADER */}

      <section className="certificate-header-section">
        <div className="certificate-header">
          <div className="certificate-badge">Professional Certifications</div>

          <h1 className="certificate-title">
            Certifications &
            <br />
            Learning Journey
          </h1>

          <p className="certificate-subtitle">
            A collection of certifications that reflect my continuous learning,
            technical growth, and commitment to improving my skills in software
            development, data analytics, and related technologies.
          </p>
        </div>
      </section>

      {/* GRID */}

      <section className="certificate-grid-section">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-thumbnail"
            />

            <div className="certificate-content">
              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <button onClick={() => setSelectedCertificate(certificate)}>
                View Certificate →
              </button>
            </div>
          </div>
        ))}
      </section>
      {selectedCertificate && (
        <div className="certificate-overlay">
          <div className="certificate-modal">
            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>

            <img
              src={selectedCertificate.image}
              alt=""
              className="certificate-preview"
            />

            {/* <div className="certificate-modal-content">
              <h2>{selectedCertificate.title}</h2>

              <p>
                Issued by
                <strong>{selectedCertificate.issuer}</strong>
              </p>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
