import React from "react";
import "./Upgradeuicard1.css";

function Upgradeuicard1() {
  return (
    <div className="up_cardcontainer">
      <div className="up_card1">
        <h1>Personal</h1>
        <p>
          Includes the Docker essentials and is
          <br /> ideal for individual developers,
          <br />
          education, open source communities,
          <br /> and small businesses.
        </p>
        <div className="up_h1">
        <h1 className="up_h1">$0</h1>
        </div>
        <div className="up_list">
        <ul>
          <li>Docker Desktop</li>
          <li>Unlimited public repositories</li>
          <li>
            Docker Engine + <br />
            Kubernetes
          </li>
          <li>Limited image pulls per day</li>
          <li>Unlimited scoped tokens</li>
        </ul>
        </div>
        <button className="up_button">Continue with Free</button>
      </div>
    </div>
  );
}

export default Upgradeuicard1;
