import React from "react";
import Navbar from "./navbar";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6";
import Content8 from "./content8";
import Content9 from "./content9";
import Content10 from "./content10";
import Content11 from "./content11";
import Content12 from "./content12";
import SignIn from "./signin";
import SignUp from "./signup";
// import Footer from "./footer";
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
