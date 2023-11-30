import React from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Searchbar() {
  return (
      <div className="d_input">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="dicon" />
        <input
          type="text"
          placeholder="Search Docker Hub"
          className="d_input2"
        />
        <div className="innerdiv">ctrl+K</div>
      </div>
  );
}

export default Searchbar;
