import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

function Footer() {
  return (
    <footer className="footer">
      <h2>Let's Work Together 🚀</h2>

      <div className="footer-links">
        <a href="https://www.instagram.com/kallrmdhn/">
          <img src="/images/ig.svg" alt="ig" />
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/haekal-akmal-ramadhan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
          LinkedIn
        </a>

        <a href="https://github.com/kalrmdhn" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
          GitHub
        </a>
      </div>

      <p className="footer-copy">© 2026 Haekal Akmal Ramadhan</p>
    </footer>
  );
}

export default Footer;
