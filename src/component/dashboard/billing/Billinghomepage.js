import React from "react";
import "./Billinghomepage.css";
import Billingcards from "./Billingcards";
import DashboardHeader from "../../header/dashboard/DashboardHeader";

function Billinghomepage() {
  return (
    <>
    <DashboardHeader />
    <div className="billing_container">
      <div className="b_content1">
        <h1>Billing Details</h1>
        <p>Your personal account</p>
        <button>bajarang45</button>
        <p>
          Not finding the organization you're looking <br/>for? Check if you're the
          owner.
        </p>
      </div>
      <Billingcards />
    </div>
    </>
  );
}

export default Billinghomepage;
