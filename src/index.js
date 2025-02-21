import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./nav/nav.css";
import "./hero/hero.css";
import "./about/about.css";
import "./projects/projects.css";
import "./work/work.css";
import "./contact/contact.css";
import "./footer/footer.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import "the-new-css-reset/css/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
