import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight, faTree } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../header/home/navbar";
import SignIn from "../signin/signin";
import SignUp from "../signup/signup";
// import Footer from "./footer";

import dockerLogo from "../../images/dockerLogo.png";

import aws from "../../images/aws.jpg";
import azure from "../../images/azure.jpg";
import green from "../../images/green.jpg";

import content8 from "../../images/content8.jpg";
import build from "../../images/build.jpg";
import docker1 from "../../images/docker1.png";
import homeheroscout from "../../images/homeheroscout.webp";




function Content1() {
  return (
    <div className="main">
      <div className="main1">
        <h1>Make better, secure software from the start</h1>
      </div>
      <div className="main2">
        <h3>Announcing Docker Scout general availability.</h3>
      </div>
      <div className="cbtn">
        <button>Learn About Docker Scout</button>
      </div>
    </div>
  );
}

function Content2(){
  return(
      <div className="container">
          <div>
          <center><img src={homeheroscout} className="img"  /></center>
          </div>
      </div>
  )
}

function Content3() {
  return (
    <div className="container3">
      <center>
        <h4>What is Docker?</h4>
      </center>
      <center>
        <h1>Trusted by developers <br/>
         Chosen by Fortune 100 companies</h1>
      </center>
        <p>
          Docker provides a suite of development tools, services, trusted
          content, and automations, used individually or
           <br/> together, to accelerate
          the delivery of secure applications.
        </p>
    </div>
  );
}

function Content4(){
  return(
      <div className="container4">
          <div>
          <center><img src={docker1} className="img"  /></center>
          </div>
      </div>
  )
}

function Content5(){
  return(
      <div className="container5">
          <p><span className="number">20M+</span> <br/>monthly developers</p>
          <p><span className="number">7M+</span><br/>applications</p>
          <p><span className="number">20B+</span><br/>monthly image pulls</p>
      </div>
  )
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
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <Link
        onClick={(e) => {
          setIsClick(!isClick);
        }}
        className="build"
      >
        Build
      </Link>
      <FontAwesomeIcon icon={faRocket} />
      {isClick && (
        <div className={`show-build ${isClick ? "is-visible" : ""}`}>
            <div className="build-container">
          
          <div className="build1">
            <h1>Build</h1>
            <h3>Spin up new environments quickly</h3>
            <p>
              Develop your own unique applications with Docker images and create
              multiple containers using Docker Compose.
            </p>
            <h3>Integrate with your existing tools</h3>
            <p>
              Docker works with all development tools such as VS Code, CircleCI,
              and GitHub.
            </p>
            <h3>Containerize applications for consistency</h3>
            <p>
              Run in any environment consistently from on-premises Kubernetes to
              AWS ECS,
              <br /> Azure ACI, Google GKE, and more.
            </p>
            <div className="build2">
                <img src={build} />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
function Content8() {
  return (
    <div className="container88">
      <div className="container8">
        <h3>Container development</h3>
        <h1>New to containers?</h1>
        <p>
          We got you covered! Get started with the basics with our guide to
          containers, including what <br /> they are, their advantage over
          virtual machines, and more.
        </p>
        <div className="a">
        <a>Read the container guide</a>
        <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="img1">
        <img src={content8} />
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
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="sub_container9">
          <h4>Join our open source program</h4>
          <p>
            Our Docker-Sponsored Open Source program is ideal for<br/> developers
            working on non-commercial projects.
          </p>
          <div className="a">
            <a>Apply today</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="container1010">
      <div className="container10">
        <h1>
          Develop from code to cloud <br />
          with partners that you trust
        </h1>
        <p>
          Our partnerships ensure that your development pipeline network will
          work in your preferred environment —<br /> whether local or in the
          cloud.
        </p>
        <div className="a">
          <a>Connect with us</a>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="container_10">
        <div className="aws_container">
          <div className="awsimg">
            <h5>AWS</h5>
            <img src={aws} />
          </div>
          <p style={{color:"white"}}>
            Simplify the development of your multi-
            <br />
            container applications from Docker CLI to
            <br /> Amazon EKS and Serverless.
          </p>
        </div>

        <div className="aws_container">
          <div className="awsimg">
            <img src={azure} />
          </div>
          <p style={{color:"white"}}>
            Seamlessly bring container applications from <br />
            your local machine and run them in Azure <br />
            Container Instances.
          </p>
        </div>

        <div className="aws_container">
          <div className="awsimg">
            <img src={green} />
          </div>
          <p style={{color:"white"}}>
            Easily distribute and share Docker images with <br />
            the JFrog Artifactory image repository and <br></br> integrate all
            of your development tools.
          </p>
        </div>
      </div>
      <center>
        <div>
          <h2 style={{fontSize:32,color:"white"}}>Integrate with your favorite tools and images</h2>
        </div>
        <div>

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
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2 style={{ textAlign: "left" }}>Download Docker</h2>
          <p>
            Learn how to install Docker for Mac, Windows, or <br /> Linux and
            explore our developer tools.
          </p>
          <div className="a">
            <a>Get Started</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2>Containerize your first app</h2>
          <p>
            Develop a solid understanding of the Docker basics <br />
            with our step-by-step developer guide.
          </p>
          <div className="a">
            <a>Learn Docker</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="container_11">
          <FontAwesomeIcon className="font" icon={faTree} />
          <h2>Publish your image on Docker Hub</h2>
          <p>
            Share your application with the world
            <br /> (or other developers on your team).
          </p>
          <div className="a">
            <a>Sign up for free</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="sub_container11main">
        <div className="sub_container11">
          <div>
            <h1>Choose a subscription that’s right for you</h1>
            <p>
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
              <a>Products</a>
            </li>
          </div>
          <li>
            <a>Docker Personal</a>
          </li>
          <li>
            <a>Docker Pro</a>
          </li>
          <li>
            <a>Docker Team</a>
          </li>
          <li>
            <a>Docker Business</a>
          </li>
          <li>
            <a>Docker Scout</a>
          </li>
          <li>
            <a>Desktop vs Docker Engine</a>
          </li>
          <li>
            <a>Docker Desktop</a>
          </li>
          <li>
            <a>Secure Software Supply Chain</a>
          </li>
          <li>
            <a>Container Runtime</a>
          </li>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a>Developers</a>
            </li>
          </div>
          <li>
            <a>Docs</a>
          </li>
          <li>
            <a>Getting Started</a>
          </li>
          <li>
            <a>Extensions SDK</a>
          </li>
          <li>
            <a>Community</a>
          </li>
          <li>
            <a>Open Source</a>
          </li>
          <li>
            <a>Preview Program</a>
          </li>
          <li>
            <a>System Status</a>
          </li>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a>Pricing</a>
            </li>
          </div>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Docker Verified Publisher</a>
          </li>
          <li>
            <a>Partners</a>
          </li>
          <div className="P">
            <li>
              <a>Blog</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="container12second">
        <ul className="sub_container12second">
          <div className="P">
            <li>
              <a>About Us</a>
            </li>
          </div>
          <li>
            <a>Trust</a>
          </li>
          <li>
            <a>What is a Container</a>
          </li>
          <li>
            <a>Why Docker</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Swag Store</a>
          </li>
          <li>
            <a>Newsroom</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Customers </a>
          </li>
          <li>
            <a>Trademark Guidelines</a>
          </li>
          <div className="P">
            <li>
              <a>Languages</a>
            </li>
          </div>
          <li>
            <a>English</a>
          </li>
          <li>
            <a>日本語</a>
          </li>
        </ul>
      </div>
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
      <div style={{ backgroundColor: "#f5fafe" }}>
        <Content8 />
      </div>
      <Content9 />
      <div style={{backgroundColor:"black"}}>
        <Content10 />
      </div>
      <Content11 />
      <Content12 />
      <SignIn />
      <SignUp />
    </div>
  );
}
export default Home;
