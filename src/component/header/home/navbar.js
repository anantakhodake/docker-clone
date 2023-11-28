import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import dockerLogo from "../../../images/dockerLogo.png";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="main">
      <div className="main1">
        <ul className="header">
          <img src={dockerLogo} />
          <li>
            <Link>Products</Link>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li
          onClick={(e)=>{
            setIsHovered(!isHovered)
          }}
           className="developer-menu"
          >
            <Link>Developers</Link>
            <FontAwesomeIcon icon={faAngleDown} />
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
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>About</Link>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>
            <Link>Partners</Link>
          </li>
          <div className="btn">
            <div className="first">
              <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
              <button>Sign in</button>
            </div>
            <div>
              <button className="btn1">Get started</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
