import React, { useState } from "react";
import "./Settingtabs.css";
import Genaralsettingtab from "./Genaralsettingtab";
import Securitysettingtab from "./Securitysettingtab";
import Defaultprivacysettingtab from "./Defaultprivacysettingtab";
import Notificationsettingtab from "./Notificationsettingtab";
import Converaccountsettingtab from "./Converaccountsettingtab";
import Deactivateaccountsettingtab from "./Deactivateaccountsettingtab";

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
          <button
            onClick={() => setTab("Default Privacy")}
            className={` ${tab == "Default Privacy" ? "active" : ""}`}
          >
            Default Privacy
          </button>
          <button
            onClick={() => setTab("Notification")}
            className={` ${tab == "Notification" ? "active" : ""}`}
          >
            Notifications
          </button>
          <button
            onClick={() => setTab("Convert Account")}
            className={` ${tab == "Convert Account" ? "active" : ""}`}
          >
            Convert Account
          </button>
          <button
            onClick={() => setTab("Deactive Account")}
            className={` ${tab == "Deactive Account" ? "active" : ""}`}
          >
            Deactivate Acc
          </button>
        </div>
        {tab === "Genaral" ? (
          <Genaralsettingtab />
        ) : tab === "Security" ? (
          <Securitysettingtab />
        ) : tab === "Default Privacy" ? (
          <Defaultprivacysettingtab />
        ) : tab === "Notification" ? (
          <Notificationsettingtab />
        ) : tab === "Convert Account" ? (
          <Converaccountsettingtab />
        ) : tab === "Deactive Account" ? (
          <Deactivateaccountsettingtab />
        ) : (
          <Genaralsettingtab />
        )}
      </div>
    </>
  );
}

export default Settingtabs;
