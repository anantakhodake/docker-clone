import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DockeraLogo from "../../../images/dockerLogo.png";
function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav_container">
      {/* image part in navbar */}
      <div className="nav_img">
        <img src={DockeraLogo} alt="" />
      </div>
      {/* menu in navbar */}
      <div className="navbar_menu">
        <ul>
          <li>
            <a href="">Product</a>
            <FontAwesomeIcon fontSize="14px" icon={faAngleDown} />
          </li>
          <li>
            <a href="">Developers</a>
            <FontAwesomeIcon fontSize="14px" icon={faAngleDown} />
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About Us</a>
            <FontAwesomeIcon fontSize="14px" icon={faAngleDown} />

          </li>
          <li>
            <a href="">Partners</a>
          </li>
        </ul>
      </div>
      {/* navbar buttons  */}
      <div className="navbar_buttons">
        <div className="glass">
          <FontAwesomeIcon fontSize="15px" icon={faMagnifyingGlass} />
          <button className="nav_btn1">Sign In</button>
        </div>
        <div>
        <button className="nav_btn2">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
