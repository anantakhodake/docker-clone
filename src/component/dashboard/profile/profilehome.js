import React from "react";
import "./Profilehome.css";
import blueFingerprint from "./blueFingerprint.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import Profiletabs from "./Profiletabs";
function Profilehome() {
  return (
    <>
    <div className="profile_container">
      <div className="profile_image<">
        <img className="pr_image"   src={blueFingerprint} alt="" />
      </div>
      <div className="profile_user">
        <div className="profile_user1">
          <h1>Ananta Khodake</h1>
          <a href="">Edit profile</a>
        </div>
        <div className="profile_user3">
          <div className="p_icons">
            <FontAwesomeIcon icon={faUser} />
            <span>Community User</span>
          </div>
          <div className="p_icons">
            <FontAwesomeIcon icon={faClock} />
            <span>Joined November 28,2023 </span>
          </div>
        </div>
      </div>
    </div>
    <Profiletabs />
    </>
  );
}
export default Profilehome;
