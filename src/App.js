import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>BIENVENIDOS</h1>
      <Routes>
        <Route path="/prueba" element={<h2>prueba</h2>}/>
      </Routes>
      </div>
  );
}

export default App;
