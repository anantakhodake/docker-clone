import React from "react";
import "./content11.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTree } from "@fortawesome/free-solid-svg-icons";
function Content11() {
  return (
    <div className="container___11">
      <div className="container11">
        <h3>How to get started</h3>
        <h1>
          Your path to accelerated application <br />
          development starts here.
        </h1>
      </div>
      <div className="container_11main">
        <div className="container_11">
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2 style={{ textAlign: "left" }}>Download Docker</h2>
          <p>
            Learn how to install Docker for Mac, Windows, or <br /> Linux and
            explore our developer tools.
          </p>
          <div className="a">
            <a>Get Started</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2>Containerize your first app</h2>
          <p>
            Develop a solid understanding of the Docker basics <br />
            with our step-by-step developer guide.
          </p>
          <div className="a">
            <a>Learn Docker</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2>Publish your image on Docker Hub</h2>
          <p>
            Share your application with the world
            <br /> (or other developers on your team).
          </p>
          <div className="a">
            <a>Sign up for free</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="sub_container11main">
        <div className="sub_container11">
          <div>
            <h1>Choose a subscription that’s right for you</h1>
            <p>
              Find your perfect balance of collaboration, security, and support
              with a Docker subscription.
            </p>
          </div>
          <button className="container11btn">Find Pricing</button>
        </div>
      </div>
      </div>
  );
}

export default Content11;
