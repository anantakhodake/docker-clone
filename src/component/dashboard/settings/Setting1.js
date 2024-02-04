import React from "react";
import "./Setting1.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import blueFingerprint from "./blueFingerprint.png";
function Setting1() {
  return (
    <>
    <div className="setting_container">
      <div className="s_links">
        <Link className="s_link">Account Setting /</Link>
        <Link className="s_link">General</Link>
      </div>

      <div className="ss_container">
        <div className="s_image<">
          <img  className="pr_image" src={blueFingerprint} alt="" />
        </div>
        <div className="s_user">
          <div className="s_user1">
            <h1>Ananta Khodake</h1>
            <a href="">Edit profile</a>
          </div>
          <div className="s_user3">
            <div className="s_icons">
              <FontAwesomeIcon icon={faUser} />
              <span>Community User</span>
            </div>
            <div className="s_icons">
              <FontAwesomeIcon icon={faClock} />
              <span>Joined November 28,2023 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
}

export default Setting1;
