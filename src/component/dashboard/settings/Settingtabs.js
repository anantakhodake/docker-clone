import React, { useState } from "react";
import "./Settingtabs.css";
import Genaralsettingtab from "./Genaralsettingtab";

function Settingtabs() {
  const [tab, setTab] = useState("Genaral");
  return (
    <div className="settingtabs_container">
      <div className="s_card1">
        <button
          onClick={() => setTab("Genaral")}
          className={` ${tab == "Genaral" ? "active" : ""}`}
        >
          Genaral
        </button>
        <button>Security</button>
        <button>Default Privacy</button>
        <button>Convert Account</button>
        <button>Convert Account</button>
        <button>Deactivate Acc</button>
      </div>
      <Genaralsettingtab />
    </div>
  );
}

export default Settingtabs;
