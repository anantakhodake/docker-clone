import React from "react";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <div className="footermain">
      <div className="footer_1">
        <div className="footer1">
          <TwitterIcon className="footer1" />
          <InstagramIcon className="footer1" />
          <YouTubeIcon className="footer1" />
          <FacebookIcon className="footer1" />
          <LinkedInIcon className="footer1" />
        </div>
      </div>
      <div className="footer2"></div>
      <div className="footer3"></div>
    </div>
  );
}

export default Footer;
