import React from "react";
import "./Notificationsettingtab.css";

function Notificationsettingtab() {
  return (
    <div className="n_container">
      <div className="n_content1">
        <h2>Notifications</h2>
        <p>
          Receive notifications from Receive notifications from{" "}
          <span style={{ color: "blue" }}>autobuilds</span>⁠ when it finishes
          building your images. Notifications are sent to your current email
          address.
        </p>
        <div className="n_content2">
          <div className="ni_">
            <input type="checkbox" />
            <span>Off</span>
          </div>
          <div  className="ni_">
            <input type="checkbox" />
            <span>Only failures</span>
          </div>
          <div  className="ni_">
            <input type="checkbox" />
            <span>Everything</span>
          </div>
        </div>
        <button className="n_btn">Save</button>
      </div>
    </div>
  );
}

export default Notificationsettingtab;
