import React from "react";
import "./Explorecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import eimage from "./eimage.png"
function Explorecard() {
  return (
    <div className="card_containermain">
      <div className="card_explore">
        <p>1 - 25 of 10,000 available results.</p>
        <div className="d_homepage">
          <div className="sub_dhomepage">
            <input className="h_input" type="text" placeholder="All content" />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
      <div className="card_container">
        <div>
          <img src={eimage} alt=""/>
        </div>
        <div>
          <p style={{color:"#393f49"}}>alphine <span style={{color:"blue"}}>Docker official image.</span></p>
          <p>Update 3 days ago</p>
          <p>A minimal docer image based on alphine linux with a compleate package index and only 5......</p>
          <div className="cards_buttons">
            <button>Linux</button>
            <button>IBM Z</button>
            <button>Riscv64</button>
            <button>x86-64</button>
            <button>ARM</button>
            <button>ARM64</button>
            <button>386</button>
            <button>Power LE</button>
          </div>
        </div>
        <div>
          <p>Pulls:9,292,066</p>
          <p>Nov20 to Nov 26</p>
        </div>
      </div>
    </div>
  );
}

export default Explorecard;
