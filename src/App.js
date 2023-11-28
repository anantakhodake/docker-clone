import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './component/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
