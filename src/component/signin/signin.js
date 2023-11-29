import React from "react";
import dockerLogo from "../../images/dockerLogo.png";
import "./signin.css";
function SignIn() {
  return (
    <center>
      <div className="signin_container">
        <div className="signin_container1">
          <img src={dockerLogo} alt=""/>
          <h1>Sign In</h1>
          <p>Sign in to Docker to continue to Docker Hub.</p>
        </div>
        <div className="signin_container2">
          <input
            className="sinput"
            type="name"
            placeholder="Enter username or email"
          />
          <button className="sbtn1">Continue</button>
          <div className="hr">__________________OR___________________</div>
          <button className="sbtn2">Continue With Google</button>
          <button className="sbtn2">Continue With Github</button>
        </div>
      </div>
    </center>
  );
}

export default SignIn;
