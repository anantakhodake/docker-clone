import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import DockeraLogo from "../../../images/dockerLogo.png";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="nav_container">
        {/* image part in navbar */}
        <img src={DockeraLogo} alt="docker image" />
        {/* menu in navbar */}
        <ul className="navbar_menu">
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
          <li>
            <a href="">
              <button className="action-btn">Sign In</button>
            </a>
          </li>
          <li>
            <a href="">
              <button className="action-btn">Get Started</button>
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          size="2xl"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          icon={faBars}
          className="toggle-icon"
        />
      </nav>
      <ul className={`mobile-menu ${toggleMenu ? "show" : "hide"}`}>
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
          <FontAwesomeIcon fontSize="14px" color="blue" icon={faAngleDown} />
        </li>
        <li>
          <a href="">Partners</a>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
