import React from "react";
import "./App.css";
import Home from "./component/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./component/signin/signin";
import SignUp from "./component/signup/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<><SignUp /></>} />
        <Route path="/dashboard" element={<>dashboard</>} />
        <Route path="/dashboard/search" element={<>explore</>} />
        <Route
          path="/dashboard/repositories/:username"
          element={<>user repos</>}
        />
        <Route path="*" element={<>404 | Page Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
