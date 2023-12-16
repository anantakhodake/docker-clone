import React, { useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faIndent,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../header/home/navbar";
import dockerLogo from "../../images/dockerLogo.png";
import aws from "../../images/aws.jpg";
import azure from "../../images/azure.jpg";
import green from "../../images/green.jpg";
import content8 from "../../images/content8.jpg";
import docker1 from "../../images/docker1.png";
import homeheroscout from "../../images/homeheroscout.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import appIcon from "./app-icon.jpg";
import dockerHub from "./docker-hub.png";
import dockerContainer from "./docker-container.png";
import build from "./build.jpg";
import share from "./share.jpg";
import run from "./run.png";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

function Content1() {
  return (
    <center>
      <div className="main">
        <h1>Make better, secure software from the start</h1>
        <h3>Announcing Docker Scout general availability.</h3>
        <button>Learn About Docker Scout</button>
      </div>
    </center>
  );
}

function Content2() {
  return (
    <div className="container">
      <div>
        <center>
          <img src={homeheroscout} className="img" />
        </center>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="container3">
      <center>
        <h4>What is Docker?</h4>
      </center>
      <center>
        <h1>
          Trusted by developers <br />
          Chosen by Fortune 100 companies
        </h1>
      </center>
      <p>
        Docker provides a suite of development tools, services, trusted content,
        and automations, used individually or
        <br /> together, to accelerate the delivery of secure applications.
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="container4">
      <div>
        <center>
          <img src={docker1} className="img" alt="" />
        </center>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="container5">
      <p>
        <span className="number">20M+</span> <br />
        monthly developers
      </p>
      <p>
        <span className="number">7M+</span>
        <br />
        applications
      </p>
      <p>
        <span className="number">20B+</span>
        <br />
        monthly image pulls
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="container6">
      <center>
        <h4>How Docker works</h4>
      </center>
      <center>
        <h1>
          Accelerate how you build, <br />
          share, and run applications
        </h1>
      </center>
      <p>
        Docker helps developers build, share, and run applications anywhere —
        without tedious environment
        <br />
        configuration or management.
      </p>
    </div>
  );
}

function Content7() {
  const [tab, setTab] = useState("build");
  const tabs = {
    build: {
      heading: "Build",
      subheading1: "Spin up new environments quickly",
      paragraph1:
        "Develop your own unique applications with Docker images and create multiple containers using Docker Compose.",
      subheading2: "Integrate with your existing tools",
      paragraph2:
        "Docker works with all development tools such as VS Code, CircleCI, and GitHub.",
      subheading3: "Containerize applications for consistency",
      paragraph3:
        "Run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE, and more.",
      image: build,
    },
    share: {
      heading: "Share",
      subheading1: "Build with verified, trusted content",
      paragraph1:
        "Visit Docker Hub to browse Docker Trusted Content from our verified publishers or Docker Official Images.",
      subheading2: "Collaborate with your team",
      paragraph2:
        "Pull and publish images from Hub for easy sharing between team members, organizations, or the broader community.",
      subheading3: "Secure your workspaces",
      paragraph3:
        "Ensure best practices with image access management, registry access management, and private repositories.",
      image: share,
    },
    run: {
      heading: "Run",
      subheading1: "Consistent application delivery",
      paragraph1:
        "Ship your applications knowing they’ll run the same way on any environment, locally or in the cloud.",
      subheading2: "Develop with versatility",
      paragraph2:
        "Deploy applications in isolated containers with multi-language support, reducing conflict between application dependencies.",
      subheading3: "Deploy with one command",
      paragraph3:
        "Work inside the Docker Compose CLI to expedite development and launch your applications with a single command.",
      image: run,
    },
  };
  function Build({
    heading,
    subheading1,
    subheading2,
    subheading3,
    paragraph1,
    paragraph2,
    paragraph3,
    image,
  }) {
    return (
      <div className="build_container">
        <div className="build_container1">
          <h1>{heading}</h1>
          <h3>{subheading1}</h3>
          <p>{paragraph1}</p>
          <h3>{subheading2}</h3>
          <p>{paragraph2}</p>
          <h3>{subheading3}</h3>
          <p>{paragraph3}</p>
        </div>
        <div className="build_container2">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div className="content7_container">
      <div className="content7_links">
        <div className="content7_link">
          <div className="content7_btn">
            <button
              className={` ${tab === "build" ? "active" : ""}`}
              onClick={() => setTab("build")}
            >
              <FontAwesomeIcon icon={faIndent} />
              Build
            </button>
          </div>
          <div className="content7_btn">
            <button
              className={`${tab === "share" ? "active" : ""}`}
              onClick={() => setTab("share")}
            >
              <FontAwesomeIcon
                icon={faUserGroup}
                style={{ color: "#0b214a" }}
              />
              Share
            </button>
          </div>
          <div className="content7_btn">
            <button
              className={` ${tab === "run" ? "active" : ""}`}
              onClick={() => setTab("run")}
            >
              <SystemUpdateAltIcon />
              Run
            </button>
          </div>
        </div>
      </div>
      <Build
            heading={tabs[tab].heading}
            subheading1={tabs[tab].subheading1}
            paragraph1={tabs[tab].paragraph1}
            subheading2={tabs[tab].subheading2}
            paragraph2={tabs[tab].paragraph2}
            subheading3={tabs[tab].subheading3}
            paragraph3={tabs[tab].paragraph3}
            image={tabs[tab].image}
          />
    </div>
  );
}
function Content8() {
  return (
    <div className="container88">
      <div className="container8">
        <div>
          <h3>Container development</h3>
        </div>
        <h1>New to containers?</h1>
        <p>
          We got you covered! Get started with the basics with our guide to
          containers, including what <br /> they are, their advantage over
          virtual machines, and more.
        </p>
        <div className="a">
          <a href="">Read the container guide</a>
          <FontAwesomeIcon className="right_arrow" icon={faArrowRight} />
        </div>
      </div>
      <div className="img1">
        <img src={content8} alt="" />
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="container99">
      <div className="container9">
        <h3>Connect</h3>
        <h1>Meet the community</h1>
        <p>
          Stop by any of the hundreds of meetups around the world to connect
          in-person, or
          <br /> join our Slack and Discourse for virtual peer support. Our
          Docker Captains are also
          <br /> a great source of developer insight and expertise.
        </p>
        <div className="a">
          <a>Connect with us</a>
          <FontAwesomeIcon className="right_arrow" icon={faArrowRight} />
        </div>
        <div className="sub_container9">
          <h4>Join our open source program</h4>
          <p>
            Our Docker-Sponsored Open Source program is ideal for
            <br /> developers working on non-commercial projects.
          </p>
          <div className="a">
            <a>Apply today</a>
            <FontAwesomeIcon className="right_arrow" icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div style={{ backgroundColor: "black" }} className="container1010">
      <div style={{ backgroundColor: "black" }} className="container10">
        <h1 style={{ backgroundColor: "black" }}>
          Develop from code to cloud <br />
          with partners that you trust
        </h1>
        <p style={{ backgroundColor: "black" }}>
          Our partnerships ensure that your development pipeline network will
          work in your preferred environment —<br />{" "}
          <p style={{ backgroundColor: "black" }}>
            whether local or in the cloud.
          </p>
        </p>
        <div style={{ backgroundColor: "black" }} className="a">
          <a style={{ backgroundColor: "black" }} href="">
            Our Trusted Partners
          </a>
          <FontAwesomeIcon
            style={{ backgroundColor: "black" }}
            icon={faArrowRight}
          />
        </div>
      </div>
      <div style={{ backgroundColor: "black" }} className="container_10">
        <div style={{ backgroundColor: "black" }} className="aws_container">
          <div style={{ backgroundColor: "black" }} className="awsimg">
            <h5 style={{ backgroundColor: "black" }}>AWS</h5>
            <img style={{ backgroundColor: "black" }} src={aws} alt="" />
          </div>
          <p style={{ color: "white", backgroundColor: "black" }}>
            Simplify the development of your multi-
            <br />
            container applications from Docker CLI to
            <br /> Amazon EKS and Serverless.
          </p>
        </div>

        <div style={{ backgroundColor: "black" }} className="aws_container">
          <div style={{ backgroundColor: "black" }} className="awsimg">
            <img style={{ backgroundColor: "black" }} src={azure} alt="" />
          </div>
          <p style={{ color: "white", backgroundColor: "black" }}>
            Seamlessly bring container applications from <br />
            your local machine and run them in Azure <br />
            Container Instances.
          </p>
        </div>

        <div style={{ backgroundColor: "black" }} className="aws_container">
          <div style={{ backgroundColor: "black" }} className="awsimg">
            <img style={{ backgroundColor: "black" }} src={green} />
          </div>
          <p style={{ color: "white", backgroundColor: "black" }}>
            Easily distribute and share Docker images with <br />
            the JFrog Artifactory image repository and <br></br> integrate all
            of your development tools.
          </p>
        </div>
      </div>
      <center>
        <div>
          <h2 style={{ backgroundColor: "black" }} className="h2__">
            Integrate with your favorite tools and images
          </h2>
        </div>
      </center>
    </div>
  );
}

function Content11() {
  return (
    <div className="container___11">
      <div className="container11">
        <h3>How to get started</h3>
        <h1>
          Your path to accelerated application <br />
          development starts here.
        </h1>
      </div>
      <div className="container_11main">
        <div className="container_11">
          <img src={dockerContainer} />
          <h2>Download Docker</h2>
          <p>
            Learn how to install Docker for Mac, Windows, or <br /> Linux and
            explore our developer tools.
          </p>
          <div className="a">
            <a href="">Get Started</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <img src={appIcon} />
          <h2>Containerize your first app</h2>
          <p>
            Develop a solid understanding of the Docker basics <br />
            with our step-by-step developer guide.
          </p>
          <div className="a">
            <a href="">Learn Docker</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <img src={dockerHub} />
          <h2>Publish your image on Docker Hub</h2>
          <p>
            Share your application with the world
            <br /> (or other developers on your team).
          </p>
          <div className="a">
            <a href="">Sign up for free</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="sub_container11main">
        <div className="sub_container11">
          <div style={{ background: "#1d63ed" }}>
            <h1 style={{ background: "#1d63ed" }}>
              Choose a subscription that’s right for you
            </h1>
            <p style={{ background: "#1d63ed" }}>
              Find your perfect balance of collaboration, security, and support
              with a Docker subscription.
            </p>
          </div>
          <button className="container11btn">Find Pricing</button>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="container12main">
      <div className="container12first">
        <img src={dockerLogo} />
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a href="">Products</a>
            </li>
          </div>
          <li>
            <a href="">Docker Personal</a>
          </li>
          <li>
            <a href="">Docker Pro</a>
          </li>
          <li>
            <a href="">Docker Team</a>
          </li>
          <li>
            <a href="">Docker Business</a>
          </li>
          <li>
            <a href="">Docker Scout</a>
          </li>
          <li>
            <a href="">Desktop vs Docker Engine</a>
          </li>
          <li>
            <a href="">Docker Desktop</a>
          </li>
          <li>
            <a>Secure Software Supply Chain</a>
          </li>
          <li>
            <a href="">Container Runtime</a>
          </li>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a href="">Developers</a>
            </li>
          </div>
          <li>
            <a href="">Docs</a>
          </li>
          <li>
            <a href="">Getting Started</a>
          </li>
          <li>
            <a href="">Extensions SDK</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">Open Source</a>
          </li>
          <li>
            <a href="">Preview Program</a>
          </li>
          <li>
            <a href="">System Status</a>
          </li>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a href="">Pricing</a>
            </li>
          </div>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Docker Verified Publisher</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
          <div className="P">
            <li>
              <a href="">Blog</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a href="">About Us</a>
            </li>
          </div>
          <li>
            <a href="">Trust</a>
          </li>
          <li>
            <a href="">What is a Container</a>
          </li>
          <li>
            <a href="">Why Docker</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Swag Store</a>
          </li>
          <li>
            <a href="">Newsroom</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Customers </a>
          </li>
          <li>
            <a href="">Trademark Guidelines</a>
          </li>
          <div className="P">
            <li>
              <a href="">Languages</a>
            </li>
          </div>
          <li>
            <a href="">English</a>
          </li>
          <li>
            <a href="">日本語</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

//Footer Component//

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_icons">
        <div className="footer_icon">
          <TwitterIcon className="f_micons" />
        </div>
        <div className="footer_icon">
          <LinkedInIcon className="f_micons" />
        </div>
        <div className="footer_icon">
          <FacebookIcon className="f_micons" />
        </div>
        <div className="footer_icon">
          <InstagramIcon className="f_micons" />
        </div>
        <div className="footer_icon">
          <YouTubeIcon className="f_micons" />
        </div>
      </div>
      <div className="footer_links">
        <p>
          © 2023 Docker Inc. All rights reserved |
          <span>
            <a href="">Terms Of Service |</a>
          </span>
          <span>
            <a href="">Privacy|</a>
          </span>
          <span>
            <a href="">Legal</a>
          </span>
        </p>
      </div>
      <button className="footer_btn">Cookies Settings</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Content1 />
      <Content2 />
      <div style={{ backgroundColor: "#f5fafe" }}>
        <Content3 />
        <Content4 />
        <Content5 />
      </div>
      <Content6 />
      <Content7 />
      <div style={{ backgroundColor: "#f5fafe" }}>
        <Content8 />
      </div>
      <Content9 />
      <div style={{ backgroundColor: "black" }}>
        <Content10 />
      </div>
      <Content11 />
      <Content12 />
      <Footer />
    </div>
  );
}
export default Home;
