import React from "react";
import "./Generalsettingtab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Genaralsettingtab() {
  return (
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
  );
}

export default Genaralsettingtab;
