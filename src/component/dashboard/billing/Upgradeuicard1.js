import React from "react";
import "./Upgradeuicard1.css";

function Upgradeuicard1({ detail, price, features, planName,button }) {
  return (
    <div className="up_cardcontainer">
      <div className="up_card1">
        <h1>{planName}</h1>
        <p>{detail}</p>
        <div className="up_h1">
          <h1 className="up_h1">{price}</h1>
        </div>
        <div className="up_list">
          <ul>
            {features.map((current) => {
              return <li>{current}</li>;
            })}
          </ul>
        </div>
        <div>
        <button className="up_button">{button}</button>
        </div>
      </div>
      </div>
  );
}

export default Upgradeuicard1;
