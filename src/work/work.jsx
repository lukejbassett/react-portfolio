import ALDI from "./assets/aldi.png";
import EGOS from "./assets/egos.png";

function Work() {
  return (
    <section className="container" id="work">
      <h2 className="section-title">Past Work</h2>
      <ul className="work-cards">
        <li className="work-card">
          <img src={ALDI} alt="Aldi Logo" />
          <div className="card-content">
            <h3 className="card-title">
              Aldi - <span>Store Assistant </span>
            </h3>
            <p className="card-time">2021 - 2024</p>
            <p className="card-desc">
              Job varied from checking off deliveries to dealing with enquiries
              or ensuring that the shelves are fully stocked with well-presented
              products, all while providing excellent customer service at all
              times by attending to customer needs in a prompt and friendly way.
            </p>
          </div>
        </li>
        <li className="work-card">
          <img src={EGOS} alt="Ego Mediterranean Restaurant & Bar Logo" />
          <div className="card-content">
            <h3 className="card-title">
              Aldi - <span>Food Runner</span>
            </h3>
            <p className="card-time">2020 - 2021</p>
            <p className="card-desc">
              I worked the front of house delivering customers orders, cleaning
              equipment and restocking table supplies. I experienced dealing
              with customers questions regularly and managing quantities of
              supplies ensuring the restaurant runs smoothly.
            </p>
          </div>
        </li>
        <li className="work-card">
          <img src="" alt="" />
          <div className="card-content">
            <h3 className="card-title">
              Company - <span>Job Role</span>
            </h3>
            <p className="card-time">2020 - 2021</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus dolores tempore maiores magnam ipsa vero ut mollitia
              velit dolorum dolorem, hic voluptatem. Quasi reiciendis debitis
              nihil nesciunt, iusto doloremque deserunt.
            </p>
          </div>
        </li>
        <li className="work-card">
          <img src="" alt="" />
          <div className="card-content">
            <h3 className="card-title">
              Company - <span>Job Role</span>
            </h3>
            <p className="card-time">2020 - 2021</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus dolores tempore maiores magnam ipsa vero ut mollitia
              velit dolorum dolorem, hic voluptatem. Quasi reiciendis debitis
              nihil nesciunt, iusto doloremque deserunt.
            </p>
          </div>
        </li>
        <li className="work-card">
          <img src="" alt="" />
          <div className="card-content">
            <h3 className="card-title">
              Company - <span>Job Role</span>
            </h3>
            <p className="card-time">2020 - 2021</p>
            <p className="card-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus dolores tempore maiores magnam ipsa vero ut mollitia
              velit dolorum dolorem, hic voluptatem. Quasi reiciendis debitis
              nihil nesciunt, iusto doloremque deserunt.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Work;
