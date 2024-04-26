import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
import HomePage from "./pages/HomePage";
import Genres from "./pages/Genres";
import Game from "./pages/Game";


const API_KEY = import.meta.env.VITE_API_KEY;


function App() {

  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  
    useEffect(() => {
      const apiCall = `https://api.rawg.io/api/games?key=${API_KEY}`;
      axios.get(apiCall)
        .then(response => {
          setGames(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    useEffect(() => {
        const apiCall = `https://api.rawg.io/api/genres?key=${API_KEY}`;
        axios.get(apiCall)
          .then(response => {
            setGenres(response.data.results);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      useEffect(() => {
        const apiCall = `https://api.rawg.io/api/platforms?key=${API_KEY}`;
        axios.get(apiCall)
          .then(response => {
            setPlatforms(response.data.results);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage games={ games } genres={ genres } platforms={ platforms }/>}/>
        <Route path="/genres" element={<Genres genres={ genres }/>}/>
        <Route path="/game/:id" element={<Game />}/>
      </Routes>
    </Router>
  );
}

export default App;
