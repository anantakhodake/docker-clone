import React from "react";
import "./Billingcards.css";
import blueFingerprint from "./blueFingerprint.png";
function Billingcards() {
  return (
    <div className="billingcard_container">
      <div className="b_card1">
        <img src={blueFingerprint} alt="" />
        <div className="b_subcard1">
          <p>Your personal account</p>
          <h2>bajarang45</h2>
        </div>
      </div>
    </div>
  );
}

export default Billingcards;
