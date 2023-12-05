import React, { useState } from "react";
import "./Profiletabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";

function RepositoriesTab() {
  return (
    <div className="tabs_contentrepo">
      <div className="tab_content">
        <p>Displaying 1 to 1 repositories</p>
        <div className="repository_tabscard">
          <div className="prhomepage_2">
            <div>
              <h4>bajarang45 / test</h4>
              <p>
                By <span style={{ color: "blue" }}>bajarang45 /</span> Upadate 7
                days ago
              </p>
            </div>
            <div className="pr_public">
              <FontAwesomeIcon icon={faGlobe} />
              <h5>public</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function StarredTab() {
  return (
    <div className="tabs_contentrepo">
      <div className="tabs_content1">
        <FontAwesomeIcon icon={faStar} className="tab_icon" />
        <h3>No starred content</h3>
        <p>This profile has not starred any content</p>
      </div>
    </div>
  );
}
function ContributeTab() {
  return (
    <div className="tabs_contentrepo">
      <div className="tabs_content1">
        <FontAwesomeIcon icon={faStar} className="tab_icon" />
        <h3>No Contributed Repositories yet</h3>
        <p>Repositories that you are a collaborator of will show up here.</p>
      </div>
    </div>
  );
}
function Profiletabs() {
  const [tab, setTab] = useState("repo");

  return (
    <div className="profiletabs_container">
      <div className="tabs_heading">
        <button
          className={` ${tab == "repo" ? "active" : ""}`}
          onClick={() => setTab("repo")}
        >
          Repositories
        </button>
        <button
          className={` ${tab == "starred" ? "active" : ""}`}
          onClick={() => setTab("starred")}
        >
          Starred
        </button>
        <button
          className={` ${tab == "contribute" ? "active" : ""}`}
          onClick={() => setTab("contribute")}
        >
          Contributed
        </button>
      </div>
      {tab === "repo" ? (
        <RepositoriesTab />
      ) : tab === "starred" ? (
        <StarredTab />
      ) : (
        <ContributeTab />
      )}
    </div>
  );
}

export default Profiletabs;
