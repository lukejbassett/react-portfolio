import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container nav">
        <nav className="nav-wrapper">
          <div className="nav-left">
            <span className="nav-logo">Luke</span>
          </div>
          <ul
            className={`nav-links ${menuOpen ? "is-active" : ""}`}
            id="nav-menu"
          >
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
          <svg
            className={`menu-open ${menuOpen ? "is-active" : ""}`}
            id="menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => setMenuOpen(true)}
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
          <svg
            className={`menu-close ${menuOpen ? "is-active" : ""}`}
            id="menuClose"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => setMenuOpen(false)}
          >
            <path d="M21 17.9996V19.9996H3V17.9996H21ZM7 3.5V13.5L2 8.49955L7 3.5ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z"></path>
          </svg>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
