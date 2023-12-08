import React from "react";
import "./Defaultprivacysettingtab.css";

function Defaultprivacysettingtab() {
  return (
    <div className="dprivacy_container">
      <div className="dp_content1">
        <h2>Default Repository Privacy</h2>
        <p>
          Using 0 of 1 private repositories.
          <span>
            <a href="" style={{color:"blue"}}>Get more</a>
          </span>
        </p>
        <div className="dp-container">
          <div className="dp_public">
            <input type="checkbox" />
            <div className="dp_">
              <p style={{fontWeight:"bold"}}>Public</p>
              <p>Appears in Docker Hub search results</p>
            </div>
          </div>
          <div className="dp_private">
            <input type="checkbox" />
            <div className="dp_">
              <p style={{fontWeight:"bold"}}>Private</p>
              <p>Only visible to you</p>
            </div>
          </div>
        </div>
      </div>
      <button className="dp_btn">Save</button>
    </div>
  );
}

export default Defaultprivacysettingtab;
