import React from "react";
import dockerLogo from "../images/dockerLogo.png";
import "./signup.css";
function SignUp() {
  return (
    <center>
      <div className="signup_container">
        <div className="signup_container1">
          <img src={dockerLogo} />
          <h1>Create Your Account</h1>
        </div>
        <div className="signup_container2">
          <button className="sibtn2">Continue With Google</button>
          <br />
          <button className="sibtn2">Continue With Github</button>
          <div className="hr">_______________________OR________________________</div>
          <div className="signup_container3">
            <input className="s_input" type="email" placeholder="email" />
            <input className="s_input" type="namer" placeholder="Username" />
            <input className="s_input" type="password" placeholder="Password" />

            <div>
              <input type="checkbox" />
              <span className="sp">Send me occasional product updates and announcements.</span>
            </div>
            <p className="sp">
              This site is protected by reCAPTCHA and the Google
              <span>
                <a style={{color:"blue"}}>Privacy Policy </a>
              </span>
              and{" "}
              <span>
                <a style={{color:"blue"}}>apply.</a>
              </span>
            </p>
          </div>
          <button className="sbtn1">Sign Up</button>
          <p>
            By creating an account I agree to the
            <span>
              <a style={{color:"blue"}}>
                Subscription Service Agreement, Privacy Policy, Data Processing
                Terms.
              </a>
            </span>
          </p>
          <button className="sbtn2">Already have an account?Sign In</button>
        </div>
      </div>
    </center>
  );
}

export default SignUp;
