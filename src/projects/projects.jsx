import HOS from "./assets/hos-laptop.png";

function Projects() {
  const goToRepoOne = () => {
    window.open(
      "https://github.com/lukejbassett/HoS-website-app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="project-section">
      <div className="container projects" id="projects">
        <h2 className="section-title">My Projects</h2>
        <ul className="project-cards">
          <li className="project-card">
            <img src={HOS} alt="#" />
            <div className="card-content">
              <h2>Harvey's of Stretton</h2>
              <p>Web Application</p>
              <p className="card-desc">
                Database management web app for an HND Assignment. Mainly using
                JavaScript and PHP alongisde XAMPP and HeidiSQL for the database
                hosting
              </p>
              <button className="primary-btn" onClick={goToRepoOne}>
                Repository
              </button>
            </div>
          </li>
          <li className="project-card">
            <img src="" alt="" />
            <div className="card-content">
              <h2>Project Title</h2>
              <p>Web Application</p>
              <p className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                impedit enim nesciunt est sunt, facilis commodi temporibus
                omnis, voluptatibus eligendi odio? Voluptates accusantium modi
                explicabo, obcaecati in quam quae iure?
              </p>
              <button className="primary-btn" onClick="">
                Repository
              </button>
            </div>
          </li>
          <li className="project-card">
            <img src="" alt="" />
            <div className="card-content">
              <h2>Project Title</h2>
              <p>Web Application</p>
              <p className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                impedit enim nesciunt est sunt, facilis commodi temporibus
                omnis, voluptatibus eligendi odio? Voluptates accusantium modi
                explicabo, obcaecati in quam quae iure?
              </p>
              <button className="primary-btn" onClick="">
                Repository
              </button>
            </div>
          </li>
          <li className="project-card">
            <img src="" alt="" />
            <div className="card-content">
              <h2>Project Title</h2>
              <p>Web Application</p>
              <p className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                impedit enim nesciunt est sunt, facilis commodi temporibus
                omnis, voluptatibus eligendi odio? Voluptates accusantium modi
                explicabo, obcaecati in quam quae iure?
              </p>
              <button className="primary-btn" onClick="">
                Repository
              </button>
            </div>
          </li>
          <li className="project-card">
            <img src="" alt="" />
            <div className="card-content">
              <h2>Project Title</h2>
              <p>Web Application</p>
              <p className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                impedit enim nesciunt est sunt, facilis commodi temporibus
                omnis, voluptatibus eligendi odio? Voluptates accusantium modi
                explicabo, obcaecati in quam quae iure?
              </p>
              <button className="primary-btn" onClick="">
                Repository
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
