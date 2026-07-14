import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";

function Contact() {
  const form = useRef();

  const fireConfetti = () => {
    confetti({
      particleCount: 60,

      angle: 60,

      spread: 75,

      origin: { x: 0 },
    });

    confetti({
      particleCount: 60,

      angle: 120,

      spread: 75,

      origin: { x: 1 },
    });
  };
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const processSendEmail = () => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_7pk3bfr",
        "template_mripd4k",
        form.current,
        "LmiWkiEg-SFavoMTZ",
      )
      .then(() => {
        form.current.reset();

        setLoading(false);
        setIsSending(false);

        fireConfetti();

        setTimeout(() => {
          setShowSuccess(true);
        }, 180);
      })
      .catch((error) => {
        console.error(error);

        setLoading(false);
        setIsSending(false);
      });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (loading || isSending) return;

    setIsSending(true);

    // Tunggu animasi pesawat selesai
    setTimeout(() => {
      processSendEmail();
    }, 650);
  };
  return (
    <section className="contact-page">
      <div className="contact-back">
        <Link to="/" className="contact-back-btn">
          <span className="contact-back-icon">←</span>
          <span>Back to Home</span>
        </Link>
      </div>
      {/* HEADER */}

      <section className="contact-header-section">
        <div className="contact-header">
          <div className="contact-badge">Available for Opportunities</div>

          <h1 className="contact-title">
            Let's Build Something
            <br />
            Amazing Together
          </h1>

          <p className="contact-subtitle">
            Whether you have a project in mind, a job opportunity, or simply
            want to connect, I'd be happy to hear from you.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="contact-content-section">
        {/* LEFT */}
        <div className="contact-info-card">
          <h2>Let's Connect</h2>

          <p className="contact-info-description">
            I'm always excited to connect with new people, explore interesting
            ideas, and discuss potential opportunities.
          </p>

          <div className="contact-badges">
            <span>Full-Time</span>

            <span>Freelance</span>

            <span>Networking</span>
          </div>

          <div className="contact-social-list">
            {/* EMAIL */}
            <a href="mailto:haekalr84@gmail.com" className="contact-social-card">
              <div className="contact-social-left">
                <img src="/images/gmail.svg" alt="Email" />

                <div>
                  <h4>Email</h4>

                  <p>haekalr84@gmail.com</p>
                </div>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/haekal-akmal-ramadhan"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <div className="contact-social-left">
                <img src="/images/link.svg" alt="LinkedIn" />

                <div>
                  <h4>LinkedIn</h4>

                  <p>linkedin.com/in/haekal-akmal-ramadhan</p>
                </div>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/kalrmdhn"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <div className="contact-social-left">
                <img src="/images/git.svg" alt="GitHub" />

                <div>
                  <h4>GitHub</h4>

                  <p>github.com/kalrmdhn</p>
                </div>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/kallrmdhn/"
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
            >
              <div className="contact-social-left">
                <img src="/images/ig.svg" alt="Instagram" />

                <div>
                  <h4>Instagram</h4>

                  <p>@kallrmdhn</p>
                </div>
              </div>

              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form-card">
          <h2>Send Message</h2>

          <p className="contact-form-description">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-input-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Message</label>

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading || isSending || showSuccess}
              className={`contact-submit-btn ${isSending ? "sending" : ""}`}
            >
              <img src="/images/plane.svg" alt="" className="contact-plane" />

              <span className="contact-btn-text">
                {loading ? "Sending..." : isSending ? "" : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </section>
      {/* SUCCESS MODAL */}

      {showSuccess && (
        <div className="contact-success-overlay">
          <div className="contact-success-modal">
            <div className="contact-success-icon">
              <svg className="contact-check-svg" viewBox="0 0 52 52">
                <circle
                  className="contact-check-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />

                <path
                  className="contact-check-path"
                  fill="none"
                  d="M14 27 L22 35 L38 18"
                />
              </svg>
            </div>

            <h2>Message Delivered!</h2>

            <p>
              Thank you for reaching out.
              <br />
              I'll get back to you as soon as possible.
            </p>

            <button
              className="contact-success-btn"
              onClick={() => setShowSuccess(false)}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
