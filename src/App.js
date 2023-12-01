import React from "react";
import "./App.css";
import Home from "./component/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./component/signin/signin";
import SignUp from "./component/signup/signup";
import Reporitories from "./component/dashboard/repositories/Reporitories";
import { Dashboard } from "@mui/icons-material";
import DashboardHeader from "./component/header/dashboard/DashboardHeader";
import Dashboardhomepage from "./component/header/dashboard/Dashboardhomepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<><SignUp /></>} />
        <Route path="/dashboard" element={<><Dashboardhomepage/></>} />
        <Route path="/dashboard/search" element={<>explore</>} />
        <Route
          path="/dashboard/repositories/:userid"
          element={<><Reporitories/> </>}
        />
        <Route path="*" element={<>404 | Page Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
