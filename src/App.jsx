import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Box, Center} from "@chakra-ui/react";
import DetailsHouse from "./commons/DetailsHouse";
import CheckOut from "./commons/CheckOut";
import Accomplished from "./commons/Accomplished";
import Footer from "./components/Footer";
import Users from "./commons/Users";
import Messages from "./commons/Messages";

function App() {
  return (
    <Box position="absolute " w="100%">

        
          <NavBar />
      
      
      <Box  >
        <Center>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/accomplished" element={<Accomplished />} />
            <Route path="/users"element={<Users />} />
            <Route path="/messages"element={<Messages />} />

            <Route path="/houses/:id" element={<DetailsHouse />} />



            <Route path="/casas" element={<Home />} />
            <Route path="/ph" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
