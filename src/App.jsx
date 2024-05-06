import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
import HomePage from "./pages/HomePage";
import Genres from "./pages/Genres";
import Platforms from "./pages/Platforms";
import Game from "./pages/Game";
import GameByGenre from "./pages/GamesByGenre";
import GamesByPlatform from "./pages/GamesByPlatform";


const API_KEY = import.meta.env.VITE_API_KEY;


function App() {

  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [popularGames, setPopularGames] = useState([])

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

  useEffect(() => {
    const apiCall = `https://api.rawg.io/api/games?key=${API_KEY}&metacritic=90,100`;
    axios.get(apiCall)
      .then(response => {
        setPopularGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage games={games} setGames={setGames} genres={genres} platforms={platforms} />} />
        <Route path="/genres" element={<Genres genres={genres} />} />
        <Route path="/platforms" element={<Platforms platforms={platforms} />} />
        <Route path="/popular-games" element={<HomePage games={popularGames} setGames={setGames} genres={genres} platforms={platforms} />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/genre/:id" element={<GameByGenre games={games} setGames={setGames} genres={genres} platforms={platforms}/>} />
        <Route path="/platform/:id" element={<GamesByPlatform games={games} setGames={setGames} genres={genres} platforms={platforms}/>} />
      </Routes>
    </Router>
  );
}

export default App;
