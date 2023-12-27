import React from "react";
import { Link } from "react-router-dom";
import dockerLogo from "../../images/dockerLogo.png";
import "./signin.css";
function SignIn() {
  return (
    <center>
      <div className="stext">
        <span>Don't have an account?</span>
        <Link className="ss_" to={"/signup"}>
          Sign Up
        </Link>
      </div>
      <div className="signin_container">
        <div className="signin_container1">
          <img src={dockerLogo} alt="" />
          <h1>Sign In</h1>
          <p>Sign in to Docker to continue to Docker Hub.</p>
        </div>
        <div className="signin_container2">
          <input
            className="sinput"
            type="name"
            placeholder="Enter username or email"
          />
          <Link to={"/dashboard"}>
            <button className="sbtn1">Continue</button>
          </Link>
          <div className="hr">___________________OR____________________</div>
          <button className="sbtn2">Continue With Google</button>
          <button className="sbtn2">Continue With Github</button>
        </div>
      </div>
      <div className="s_text">
        <a href=""> Privacy Policy </a>
        <a href=""> Terms of Service</a>
      </div>
    </center>
  );
}

export default SignIn;
