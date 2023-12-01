import React from "react";
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
              <h4>{username.userid} / test</h4>
              <p>contains:no contains| last push:2days ago</p>
            </div>
            <div className="d_public">
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
