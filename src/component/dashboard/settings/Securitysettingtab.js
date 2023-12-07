import React from "react";
import "./Securitysettingtab.css";

function Securitysettingtab() {
  return (
    <div className="securitytab_container">
      <div className="stab_container">
        <div className="s_content">
          <div className="s_content1">
            <h2>Access Token</h2>
            <div className="ss_">
              <p>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  It looks like you have not created any access tokens.
                </span>
                <br /> Docker Hub lets you create tokens to authenticate access.
                Treat personal
                <br />
                access tokens as alternatives to your password.
                <span>
                  <a style={{ color: "blue" }} href="">
                    Learn more
                  </a>
                </span>
              </p>
              <div className="s_btn">
                <button>New Access Token</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stab_container">
        <div className="s_content">
          <div className="s_content1">
            <h2>Two-Factor Authentication</h2>
            <div className="ss_">
              <p>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Two-factor authentication is not enabled yet.
                </span>
                <br />
                Two-factor authentication adds an extra layer of security to
                your account by Treat personal
                <br />
                requiring more than just a password to sign in.
                <span>
                  <a style={{ color: "blue" }} href="">
                    Learn more
                  </a>
                </span>
              </p>
              <div className="s_btn">
                <button>Enable Two-Factor-Authentication</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Securitysettingtab;
