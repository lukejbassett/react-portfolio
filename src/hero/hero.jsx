function Hero() {
  return (
    <section className="container">
      <div className="hero-content">
        <p>Hi I'm</p>
        <p>Luke Bassett</p>
        <h1>Software Developer</h1>
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
        <div className="hero-cta">
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
          <button
            className="secondary-btn"
            onClick={() => window.open("./LukeCV.pdf")}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
