import React ,{useState}from "react";
import Searchbar from "./Searchbar"
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import blueFingerprint from "./blueFingerprint.png"
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
       <Searchbar/>
        <div className="d_links">
          <Link to={"/dashboard/search"} className="dashboard_links">Explore</Link>
          <Link className="dashboard_links" to={"/dashboard/repositories/bajarang45"}>Repositories</Link>
          <Link to={"/dashboard/orgs"} className="dashboard_links">Organization</Link>
          <Link className="dashboard_links">Help</Link>
          <Link to={"/dashboard/profile"} className="dashboard_links">Profile</Link>
          <Link to={"/dashboard/billing"} className="dashboard_links">Billing</Link>
        </div>
      </div>
      <div className="dashboard_buttons">
        <button className="d_btn1">Upgrade</button>
        {/* <button className="d_btn1">Ananta </button> */}
        <div  onClick={(e)=>{
            setIsHovered(!isHovered)
          }} className="d_btn2">
          <img className="fingerprint_image"  src={blueFingerprint} alt="" />
           <button className="pbtn"><Link className="dh_link">bajarang45</Link></button> 
          {isHovered && (
          <ul  className={`show-submenu ${isHovered ? "is-visible":""}`}>
                <li><div>Developers</div></li>
                <li><a>Docs</a></li>
                <li><a>Getting Started</a></li>
                <li><a>Extension SDK</a></li>
                <li><a>Community</a></li>
                <li><a>Preview Program</a></li>
                <li><a>Open Source</a></li>
              </ul>
            )}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
