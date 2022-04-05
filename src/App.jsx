import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <Box >
      <NavBar />
      <Center>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />

        </Routes>

      </Center>



    </Box>
  );
}

export default App;
