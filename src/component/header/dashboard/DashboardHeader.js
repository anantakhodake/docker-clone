import React from "react";
import Searchbar from "./Searchbar"
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import Dashboardhomepage from "./Dashboardhomepage";
function DashboardHeader() {
  return (
    <div className="dashboardheader_container">
      <div className="dashhead">
        <div className="dcontainer_1">
          <h1>
            docker <span>hub</span>
          </h1>
        </div>
       <Searchbar/>
        <div className="d_links">
          <Link className="dashboard_links">Explore</Link>
          <Link className="dashboard_links" to={"/dashboard/repositories/bajarang45"}>Repositories</Link>
          <Link to={"/dashboard/search"} className="dashboard_links">Explore</Link>
          <Link className="dashboard_links">Help</Link>
        </div>
      </div>
      <div className="dashboard_buttons">
        <button className="d_btn1">Upgrade</button>
        <button className="d_btn1">Ananta </button>
      </div>
    </div>
  );
}

export default DashboardHeader;
