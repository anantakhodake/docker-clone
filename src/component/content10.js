import "./content10.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import aws from "../images/aws.jpg";
import azure from "../images/azure.jpg";
import green from "../images/green.jpg";
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

export default Content10;
