function Footer() {
  return (
    <footer>
      <div className="container footer">
        <span className="footer-logo">Luke</span>
        <div className="footer-top">
          <ul className="footer-links">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <button
                className="primary-btn"
                onClick={() => window.open("./LukeCV.pdf")}
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="hero-socials">
            <li>
              <a
                href="https://www.linkedin.com/in/lukejbassett/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
            <li>
              <a href="mailto:bassettlukej@gmail.com" rel="noreferrer">
                <i class="ri-mail-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Luke_Bassett4"
                target="_blank"
                rel="noreferrer"
              >
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lukejbassett"
                target="_blank"
                rel="noreferrer"
              >
                <i class="ri-github-fill"></i>
              </a>
            </li>
          </ul>
          <p>
            Hosted on{" "}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              Vercel
            </a>
          </p>
          <p>
            &copy; 2025 Developed by{" "}
            <a
              href="https://www.linkedin.com/in/lukejbassett/"
              target="_blank"
              rel="noreferrer"
            >
              Luke Bassett
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
