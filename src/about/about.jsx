import Portrait from "./assets/portrait.jpg";
import CSS from "./assets/css.png";
import HTML from "./assets/html.png";
import PHP from "./assets/php.png";
import REACT from "./assets/react.png";
import FIGMA from "./assets/figma.png";
import JS from "./assets/javascript.png";
import NPM from "./assets/npm.png";
import NJS from "./assets/nodejs.png";
import PS from "./assets/ps.png";
import VSC from "./assets/vsc.png";

function About() {
  return (
    <>
      <section className="container" id="about">
        <div className="about-wrapper">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img src={Portrait} alt="Portrait of Luke Bassett" />
            <div className="about-content-body">
              <p>
                After doing Computer Science in high school where I enjoyed
                developing small programs in Python, I found my desire to become
                a Software Developer. This passion was strengthed two years
                later when I completed Information Technology BTEC in which we
                designed and devloped a basic program to solve a real world
                problem.
              </p>
              <p>
                In 2022 I completed a Computer Science HND. Our final project
                was to create a web application that can store and manipulate
                customer and company information. I developed this with HTML,
                CSS and PHP alongside HeidiSQL and XAMPP to host the databases
                locally. From that point onwards I knew I wanted Software
                Developer creating meaningful applications.
              </p>
              <p>
                Currently I am in University studying Computer Science to achive
                BSc (Hons). With this I aim to become a junior deveolper with my
                future goal being a Full Stack Developer. I'm always open for a
                chat{" "}
                <a href="#contact" className="about-cta">
                  here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container tools">
        <h3 className="section-title">Tools I Use</h3>
        <ul className="about-tools">
          <li>
            <img src={HTML} alt="HTML5 Logo" />
          </li>
          <li>
            <img src={CSS} alt="CSS Logo" />
          </li>
          <li>
            <img src={JS} alt="JavaScript Logo" />
          </li>
          <li>
            <img src={REACT} alt="React Logo" />
          </li>
          <li>
            <img src={PHP} alt="PHP Logo" />
          </li>
          <li>
            <img src={FIGMA} alt="Figma Logo" />
          </li>
          <li>
            <img src={NPM} alt="Node Package Manager Logo" />
          </li>
          <li>
            <img src={NJS} alt="NodeJS Logo" />
          </li>
          <li>
            <img src={PS} alt="Photoshop Logo" />
          </li>
          <li>
            <img src={VSC} alt="Visual Studio Code Logo" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
