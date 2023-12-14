import React, { useState } from "react";
import Searchbar from "./Searchbar";
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import blueFingerprint from "./blueFingerprint.png";
import Dashboardhomepage from "./Dashboardhomepage";
function DashboardHeader() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="dashboardheader_container">
      <div className="dashhead">
        <div className="dcontainer_1">
          <h1>
            docker <span>hub</span>
          </h1>
        </div>
        <Searchbar />
        <div className="d_links">
          <Link to={"/dashboard/search"} className="dashboard_links">
            Explore
          </Link>
          <Link
            className="dashboard_links"
            to={"/dashboard/repositories/bajarang45"}
          >
            Repositories
          </Link>
          <Link to={"/dashboard/orgs"} className="dashboard_links">
            Organization
          </Link>
          <Link className="dashboard_links">Help</Link>
          <Link to={"/dashboard/billing"} className="dashboard_links">
            Billing
          </Link>
          <Link to={"/dashboard/setting"} className="dashboard_links"> Account Settings</Link>
        </div>
      </div>
      <div className="dashboard_buttons">
        <button className="d_btn1">Upgrade</button>
        {/* <button className="d_btn1">Ananta </button> */}
        <div className="d_btn2">
          <img className="fingerprint_image" src={blueFingerprint} alt="" />
          <button
            onClick={(e) => {
              setIsHovered(!isHovered);
            }}
            className="pbtn"
          >
            <Link className="dh_link">bajarang45</Link>
          </button>
          {isHovered && (
            <ul className={`show-submenu ${isHovered ? "is-visible" : ""}`}>
                <Link className="dropdown_links">Whats New</Link><br/><br/>
                <Link className="dropdown_links" to={"/dashboard/profile"}>My Profile</Link><br/><br/>
                <Link className="dropdown_links">My Account</Link><br/><br/>
                <Link className="dropdown_links" to={"/dashboard/billing"}>Billing</Link><br/><br/>
                <Link className="dropdown_links" to={"/home"}>Sign Out</Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
