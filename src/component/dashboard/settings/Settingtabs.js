import React, { useState } from "react";
import "./Settingtabs.css";
import Genaralsettingtab from "./Genaralsettingtab";
import Securitysettingtab from "./Securitysettingtab";
import Defaultprivacysettingtab from "./Defaultprivacysettingtab";
import Notificationsettingtab from "./Notificationsettingtab";

function Settingtabs() {
  const [tab, setTab] = useState("Genaral");
  return (
    <>
      <div className="settingtabs_container">
        <div className="s_card1">
          <button
            onClick={() => setTab("Genaral")}
            className={` ${tab == "Genaral" ? "active" : ""}`}
          >
            Genaral
          </button>
          <button
            onClick={() => setTab("Security")}
            className={` ${tab == "Security" ? "active" : ""}`}
          >
            Security
          </button>
          <button>Default Privacy</button>
          <button>Notifications</button>
          <button>Convert Account</button>
          <button>Deactivate Acc</button>
        </div>
        <Notificationsettingtab />
        {/* <Defaultprivacysettingtab/> */}
        {/* {tab === "Genaral" ? (
          <Genaralsettingtab />
        ) : tab === "Security" ? (
          <Securitysettingtab />
        ) : (
          <Genaralsettingtab />
        )} */}
      </div>
    </>
  );
}

export default Settingtabs;
