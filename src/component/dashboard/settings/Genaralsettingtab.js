import React from "react";
import "./Generalsettingtab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Genaralsettingtab() {
  return (
    <div className="gtab_containermain">
      <div className="Gtab_container">
        <div className="g_content">
          <div className="g_content1">
            <h2>Email Address</h2>
            <div className="gg_">
              <input
                className="g_input"
                type="text"
                value="ananta.khodake02@gmail.com"
              />
              <FontAwesomeIcon icon={faCheck} />
              <span>Verified</span>
            </div>
          </div>
          <div className="g_btn">
            <button>Edit</button>
          </div>
        </div>
      </div>

      <div className="Gtab_container">
        <div className="g_content">
          <div className="g_content1">
            <h2 style={{ marginRight: "720px" }}>Change Password</h2>
            <div className="gg_">
              <input
                style={{ marginRight: "90px" }}
                className="g_input"
                type="password"
                value="ananta@45"
              />
            </div>
          </div>
          <div className="g_btn">
            <button>Change Password</button>
          </div>
        </div>
      </div>

      <div className="Gtab_container">
        <div className="g_content">
          <div className="g_content1">
            <h2 style={{ marginRight: "700px" }}>Account Information</h2>
            <p >This information will be visible to all users of Docker Hub.</p>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Company"
              />
            </div>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Location"
              />
            </div>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Website"
              />
            </div>
            <div className="gga_">
              <input
                style={{ marginRight: "90px" }}
                className="ga_input"
                type="text"
                placeholder="Gravtar Email"
              />
            </div>
          </div>
          <div className="ga_btn">
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genaralsettingtab;
