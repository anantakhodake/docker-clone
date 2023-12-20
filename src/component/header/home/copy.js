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
    <div className="navcontainer">
        <ul className="navheader">
          <img src={DockeraLogo}  alt=""/>
          <li>
            <a href="" className="navlinks">Products</a>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li
          onClick={(e)=>{
            setIsHovered(!isHovered)
          }}
           className="developer-menu"
          >
            <a href="" className="navlinks">Developers</a>
            <FontAwesomeIcon icon={faAngleDown} />
            {isHovered && (
              <ul  className={`show-submenu ${isHovered ? "is-visible":""}`}>
                <li><div>Developers</div></li>
                <li><a href="">Docs</a></li>
                <li><a href="">Getting Started</a></li>
                <li><a href="">Extension SDK</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Preview Program</a></li>
                <li><a href="">Open Source</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="" className="navlinks">Pricing</a>
          </li>
          <li>
            <a href="" className="navlinks">Blog</a>
          </li>
          <li>
            <a href="" className="navlinks">About</a>
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li>
            <a href="" className="navlinks">Partners</a>
          </li>
          <div className="navbtn">
            <Link  className="navlinks" to={"/signin"}>
            <div className="navfirst">
              <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
              <button>Sign in</button>
            </div>
            </Link>
            <div>
              <button className="navbtn1">Get started</button>
            </div>
            <div className="mobile_btn">
              <FontAwesomeIcon icon={faBars} onClick={(e)=>{
                
              }} className="mobile_icon" />
            </div>
          </div>
        </ul>
        <ul className={`mobile-menu ${toggleMenu ? "open-menu":"close-menu"}`}>
          <li className="mobile-menu-item">one</li>
          <li className="mobile-menu-item">one</li>
          <li className="mobile-menu-item">one</li>
          <li className="mobile-menu-item">one</li>
          </ul>
      </div>
  );
}
export default Navbar;