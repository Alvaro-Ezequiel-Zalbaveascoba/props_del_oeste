import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>

    </div>
  );
}

export default App;
