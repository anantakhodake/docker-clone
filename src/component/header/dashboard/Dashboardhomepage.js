import React from "react";
import dashboard from "./dashboard.jpg";
import dashboard1 from "./dashboard1.png";
import "./Dashboardhomepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "./DashboardHeader";
function Dashboardhomepage() {
  return (
    <>
    <DashboardHeader/>
    <div className="d_homepagecontainer">
      <div className="ddsubhome">
        <div className="dsub_homepagecontainer">
          <div className="d_homepage">
            <div className="sub_dhomepage">
              <input className="h_input" type="text" placeholder="Bajarang" />
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>

          <div className="d_homepage">
            <div className="sub_dhomepage">
              <input
                className="h_input"
                type="text"
                placeholder="Search by repository name"
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>

          <div className="d_homepage">
            <div className="sub_dhomepage">
              <input
                className="h_input"
                type="text"
                placeholder="All content"
              />
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>

          <div className="d_homepagebtn">
            <div className="sub_dhomepagebtn">
              <button>Create Repository</button>
            </div>
          </div>
        </div>
        <div className="homepage_2">
          <div>
            <h4>bajarang45 / test</h4>
            <p>contains:no contains| last push:2days ago</p>
          </div>
          <div className="d_public">
            <FontAwesomeIcon icon={faGlobe} />
          <h5>public</h5></div>
        </div>
      </div>
      <div className="d_imagecontainer">
        <div className="d_image">
          <img src={dashboard} alt="logo" />
          <p>
            Create an Organization <br />
            Manage Docker Hub repositories <br /> with your team
          </p>
        </div>

        <div className="d_image">
          <img
            style={{ width: "200px", height: "200px" }}
            src={dashboard1}
            alt="logo"
          />
          <p>
            <span>
              Community All-Hands:
              <br /> On-Demand
            </span>
            <br />
            Community All-Hands are now <br /> available on-demand! Over 35
            talks <br />
            cover best practices, demos, open <br /> source, product updates,
            <br /> community news, and more. Catch
            <br /> up on the sessions you missed — or
            <br /> review your favorites.
          </p>
          <a
            href=""
            style={{ color: "blue", textAlign: "left", marginTop: "30px" }}
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboardhomepage;
