import React from "react";
import "./Reporitories.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Dashboard } from "@mui/icons-material";
import DashboardHeader from "../../header/dashboard/DashboardHeader";
import { useParams } from "react-router-dom";
function Reporitories() {
  const username = useParams()
  return (
    <div>
      <DashboardHeader/>
      <div className="r_homepagecontainer">
        <div className="rrsubhome">
          <div className="rsub_homepagecontainer">
            <div className="r_homepage">
              <div className="sub_rhomepage">
                <input className="r_input" type="text" placeholder="Bajarang" />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>

            <div className="r_homepage">
              <div className="sub_rhomepage">
                <input
                  className="h_input"
                  type="text"
                  placeholder="Search by repository name"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>

            <div className="r_homepage">
              <div className="sub_rhomepage">
                <input
                  className="r_input"
                  type="text"
                  placeholder="All content"
                />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>

            <div className="r_homepagebtn">
              <div className="sub_rhomepagebtn">
                <button>Create Repository</button>
              </div>
            </div>
          </div>
          <div className="rhomepage_2">
            <div>
              <h4>{username.userid} / test</h4>
              <p>contains:no contains| last push:2days ago</p>
            </div>
            <div className="r_public">
              <FontAwesomeIcon icon={faGlobe} />
              <h5>public</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reporitories;
