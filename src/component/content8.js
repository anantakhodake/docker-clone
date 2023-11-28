import React from "react";
import "./content8.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import content8 from "../images/content8.jpg";
function Content8() {
  return (
    <div className="container88">
      <div className="container8">
        <h3>Container development</h3>
        <h1>New to containers?</h1>
        <p>
          We got you covered! Get started with the basics with our guide to
          containers, including what <br /> they are, their advantage over
          virtual machines, and more.
        </p>
        <div className="a">
        <a>Read the container guide</a>
        <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="img1">
        <img src={content8} />
      </div>
    </div>
  );
}
export default Content8;
