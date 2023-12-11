import React from "react";
import "./Upgradeui.css";
import Upgradeuicard1 from "./Upgradeuicard1";
import DashboardHeader from "../../header/dashboard/DashboardHeader";
function Upgradeui() {
  return (
    <div className="upgradeui_container">
      <DashboardHeader />
      <div className="up_header">
        <h1>Subscribe To Docker Hub Plan</h1>
        <p>Select a plan to get started with Docker Hub</p>
      </div>
      <div className="up_cardmain">
        <Upgradeuicard1 />
      </div>
    </div>
  );
}

export default Upgradeui;
