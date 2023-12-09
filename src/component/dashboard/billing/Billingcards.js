import React from "react";
import "./Billingcards.css";
import blueFingerprint from "./blueFingerprint.png";
import { Link } from "react-router-dom";

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

      <div className="b_card2container">
        <div className="b_card2">
          <h2>Docker Personal</h2>
          <p>Docker Desktop</p>
          <p>Unlimited public repositories</p>
          <p>Docker Engine + Kubernetes</p>
          <p>Limited image pulls per day</p>
          <p>Unlimited scoped tokens</p>
        </div>
        <div className="b_card2btn">
          <button className="b_card2btn">
            <Link
              className={"upgradeui_link"}
              to={"/dashboard/billing/core/purchase"}
            >
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billingcards;
