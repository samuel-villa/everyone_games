import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
import HomePage from "./pages/HomePage";
import Genres from "./pages/Genres";
import Game from "./pages/Game";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/genres" element={<Genres />}/>
        <Route path="/game/:id" element={<Game />}/>
      </Routes>
    </Router>
  );
}

export default App;
