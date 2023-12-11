import React from "react";
import "./Upgradeui.css";
import Upgradeuicard1 from "./Upgradeuicard1";
import DashboardHeader from "../../header/dashboard/DashboardHeader";
function Upgradeui() {
  const plans = {
    personal: {
      detail:
        "Includes the Docker essentials and is ideal for individual developers, education, open source communities, and small businesses.",
      price: "$0",
      features: [
        "Docker Desktop",
        "Unlimited public repositories",
        "Docker Engine + Kubernetes ",
        "Limited image pulls per day",
        "Unlimited scoped tokens",
      ],
      button:'Continue with Free'
    },
    pro: {
      detail:
        "Extends the Docker capabilities and includes pro tools for individual developers who want to accelerate their productivity.",
      price: "$5",
      info: "Everything in free, plus:",
      features: [
        "Docker Desktop",
        "Unlimited private repositories",
        "5,000 image pulls per day",
        "5 concurrent builds",
        "300 vulnerability scans",
      ],
      button:"Buy now"
    },
    team: {
      detail:
        "Ideal for teams and includes capabilities for enhanced collaboration, productivity and security.",
      price: "$9",
      info: "Everything in pro, plus:",
      features: [
        "Docker Desktop",
        "Unlimited teams",
        "15 concurrent builds",
        "Unlimited vulnerability scans",
        "Add users in bulk",
        "Audit logs",
      ],
      button:"Buy now"
    },
    buisness: {
      detail:
        "Ideal for medium and large businesses who need centralized management and advanced security capabilities.",
      price: "$24",
      info: "Everything in team, plus:",
      features: [
        "Hardened Docker Desktop",
        "Enhanced Container Isolation",
        "Settings management",
        "Centralized management",
        "Image Access Management",
        "Registry Access Management",
        "Single Sign-On (SSO)",
        "SCIM user provisioning",
        "VDI support",
        "Purchase via invoice",
        "Volume Pricing Available",
        "Company management",
      ],
      button:"Buy now"
    },
  };
  return (
    <div className="upgradeui_container">
      <DashboardHeader />
      <div className="up_header">
        <h1>Subscribe To Docker Hub Plan</h1>
        <p>Select a plan to get started with Docker Hub</p>
      </div>
      <div className="up_cardmain">
        <Upgradeuicard1 detail={plans.personal.detail} price={plans.personal.price} features={plans.personal.features} planName={"Personal"} button={plans.personal.button} />
        <Upgradeuicard1 detail={plans.pro.detail} price={plans.pro.price} features={plans.pro.features} planName={"Pro"} button={plans.pro.button} />
        <Upgradeuicard1 detail={plans.team.detail} price={plans.team.price} features={plans.team.features} planName={"Team"} button={plans.team.button} />
        <Upgradeuicard1 detail={plans.buisness.detail} price={plans.buisness.price} features={plans.buisness.features} planName={"Buisness"} button={plans.buisness.button} />
      </div>
    </div>
  );
}

export default Upgradeui;
