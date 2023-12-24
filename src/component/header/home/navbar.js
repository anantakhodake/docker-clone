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
import { isVisible } from "@testing-library/user-event/dist/utils";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submenu,setSubmenu] = useState(false);

  return (
    <>
      <nav className="nav_container">
        {/* image part in navbar */}
        <img src={DockeraLogo} alt="docker image" />
        {/* menu in navbar */}
        <ul className="navbar_menu">
          <li>
            <a href="">Product</a>
            <FontAwesomeIcon
             onClick={(e) => setIsShow(!isShow)}
              fontSize="14px"
              color="#505968"
              icon={faAngleDown}
            />
          </li>
          <li>
            <a href="">Developers</a>
            <FontAwesomeIcon
            onClick={(e) => setIsVisible(!isVisible)}
              fontSize="14px"
              color="#505968"
              icon={faAngleDown}
            />
             {isVisible && (
              <ul className={`developer-menu ${isVisible ? "show" : ""}`}>
                <div className="product-menu1">
                  <li>
                    <a href="" style={{color:"black"}}>Developers</a>
                  </li>
                  <li>
                    <a href="">Docs</a>
                  </li>
                  <li>
                    <a href="">Getting Started</a>
                  </li>
                  <li>
                    <a href="">Training</a>
                  </li>
                  <li>
                    <a href="">Extensions SDK</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Open source</a>
                  </li>
                  </div>
                  </ul>
                  )}
            {isShow && (
              <ul className={`product-menu ${isShow ? "is-visible" : ""}`}>
                <div className="product-menu1">
                  <li>
                    <a href="" style={{color:"black"}}>Product Offering</a>
                  </li>
                  <li>
                    <a href="">Docker Personal</a>
                  </li>
                  <li>
                    <a href="">Docker Pro</a>
                  </li>
                  <li>
                    <a href="">Docker Team</a>
                  </li>
                  <li>
                    <a href="">Docker Buisness</a>
                  </li>
                  <li>
                    <a href="">Docker Scout</a>
                  </li>
                  <li>
                    <a href="">Desktop vs eocker Engine</a>
                  </li>
                </div>
                <div className="product-menu1">
                  <li>
                    <h4>Features</h4>
                  </li>

                  <li>
                    <a href="">Secure software supply chain</a>
                  </li>
                  <li>
                    <a href="">Container Runtime</a>
                  </li>
                  <li>
                    <a href="">Developer Tool</a>
                  </li>
                  <li>
                    <a href="">Trusted Open source content</a>
                  </li>
                  <li>
                    <a href="">Accelerated AI/ML</a>
                  </li>
                  <li>
                    <a href="">CLI</a>
                  </li>
                  <li>
                    <a href="">IDE Extensions</a>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About Us</a>
            <FontAwesomeIcon
              fontSize="14px"
              onClick={(e) => setSubmenu(!submenu)}
              color="#505968"
              icon={faAngleDown}
            />
          </li>
          <li>
            <a href="">Partners</a>
          </li>
          <li>
            <Link to={"/signin"}>
              <a href="">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <button className="action-btn1">Sign In</button>
              </a>
            </Link>
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
          <FontAwesomeIcon fontSize="14px" color="#505968" icon={faAngleDown} />
        </li>
        <li>
          <a href="">Developers</a>
          <FontAwesomeIcon fontSize="14px" color="#505968" icon={faAngleDown} />
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
