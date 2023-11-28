import React from "react";
import "./content9.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Content9() {
  return (
    <div className="container99">
      <div className="container9">
        <h3>Connect</h3>
        <h1>Meet the community</h1>
        <p>
          Stop by any of the hundreds of meetups around the world to connect
          in-person, or
          <br /> join our Slack and Discourse for virtual peer support. Our
          Docker Captains are also
          <br /> a great source of developer insight and expertise.
        </p>
        <div className="a">
          <a>Connect with us</a>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="sub_container9">
          <h4>Join our open source program</h4>
          <p>
            Our Docker-Sponsored Open Source program is ideal for<br/> developers
            working on non-commercial projects.
          </p>
          <div className="a">
            <a>Apply today</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content9;
