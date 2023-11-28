import React, { useState } from "react";
import "./content7.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import build from "../images/build.jpg";
function Content7() {
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <Link
        onClick={(e) => {
          setIsClick(!isClick);
        }}
        className="build"
      >
        Build
      </Link>
      <FontAwesomeIcon icon={faRocket} />
      {isClick && (
        <div className={`show-build ${isClick ? "is-visible" : ""}`}>
            <div className="build-container">
          
          <div className="build1">
            <h1>Build</h1>
            <h3>Spin up new environments quickly</h3>
            <p>
              Develop your own unique applications with Docker images and create
              multiple containers using Docker Compose.
            </p>
            <h3>Integrate with your existing tools</h3>
            <p>
              Docker works with all development tools such as VS Code, CircleCI,
              and GitHub.
            </p>
            <h3>Containerize applications for consistency</h3>
            <p>
              Run in any environment consistently from on-premises Kubernetes to
              AWS ECS,
              <br /> Azure ACI, Google GKE, and more.
            </p>
            <div className="build2">
                <img src={build} />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
export default Content7;
