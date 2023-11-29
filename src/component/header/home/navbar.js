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
    <div className="navcontainer">
      <div className="navmain1">
        <ul className="navheader">
          <img src={dockerLogo}  alt=""/>
          <li>
            <Link className="navlinks">Products</Link>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li
          onClick={(e)=>{
            setIsHovered(!isHovered)
          }}
           className="developer-menu"
          >
            <Link className="navlinks">Developers</Link>
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
            <Link className="navlinks">Pricing</Link>
          </li>
          <li>
            <Link className="navlinks">Blog</Link>
          </li>
          <li>
            <Link className="navlinks">About</Link>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>
            <Link className="navlinks">Partners</Link>
          </li>
          <div className="navbtn">
            <Link className="navlinks" to={"/signin"}>
            <div className="navfirst">
              <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
              <button>Sign in</button>
            </div>
            </Link>
            <div>
              <button className="navbtn1">Get started</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
