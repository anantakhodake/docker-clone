import React from "react";
import Explorecard from "./Explorecard";
import "./Explore.css";
import DashboardHeader from "../../header/dashboard/DashboardHeader";
function Explore() {
  return (
    <>
    <DashboardHeader />
    <div className="Explore_main">
    <div className="explore_container">
      <div>
        <h3>Filter</h3>
      </div>
      <div className="input_checkbox">
        <div className="input_p">
          <p>Products</p>
          <div>
            <input type="checkbox" />
            <span>Images</span>
            </div>
        </div>
        <div className="input_p">
          <div >
            <input type="checkbox" />
            <span>Extensions</span>
          </div>
        </div>
        <div className="input_p">
          <div>
            <input type="checkbox" />
            <span>Plugins</span>
          </div>
        </div>

        <div className="input_p">
          <p>Trusted Contents</p>
          <div>
            <input type="checkbox" />
            <span>Docker official Image</span>
          </div>
        </div>
        <div className="input_p">
          <div >
            <input type="checkbox" />
            <span>Verified Publisher</span>
          </div>
        </div>
        <div className="input_p">
          <div>
            <input type="checkbox" />
            <span>Sponsored OSS</span>
          </div>
        </div>


        <div className="input_p">
          <p>Operating Systems</p>
          <div>
            <input type="checkbox" />
            <span>Linux</span>
          </div>
        </div>
        <div className="input_p">
          <div >
            <input type="checkbox" />
            <span>Windows</span>
          </div>
        </div>

        <div className="input_p">
          <p>Archeitectures</p>
          <div>
            <input type="checkbox" />
            <span>Arm</span>
          </div>
        </div>
        <div className="input_p">
          <div >
            <input type="checkbox" />
            <span>Arm 64</span>
          </div>
        </div>
        <div className="input_p">
          <div>
            <input type="checkbox" />
            <span>IBM Power</span>
          </div>
        </div>
        <div className="input_p">
          <div>
            <input type="checkbox" />
            <span>IBM_Z</span>
          </div>
        </div>
        <div className="input_p">
          <div >
            <input type="checkbox" />
            <span>Power Pc 64 LE</span>
          </div>
        </div>
        <div className="input_p">
          <div>
            <input type="checkbox" />
            <span>x68</span>
          </div>
        </div>
        </div>
      </div>
      <div className="">
      <Explorecard />
      </div>
      </div>
      </>
  );
}

export default Explore;
