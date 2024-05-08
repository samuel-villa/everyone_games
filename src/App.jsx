import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./scss/style.scss";
import HomePage from "./pages/HomePage";
import Genres from "./pages/Genres";
import Platforms from "./pages/Platforms";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import GameByGenre from "./pages/GamesByGenre";
import GamesByPlatform from "./pages/GamesByPlatform";


export const Context = React.createContext()
const API_KEY = import.meta.env.VITE_API_KEY;


function App() {

  const BASE_URL = 'https://api.rawg.io/api/'

  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])
  const [platforms, setPlatforms] = useState([])
  const [popularGames, setPopularGames] = useState([])
  const [newReleases, setNewReleases] = useState([]);
  const [nextReleases, setNextReleases] = useState([]);

  useEffect(() => {
    const apiCall = `${BASE_URL}games?key=${API_KEY}`;
    axios.get(apiCall)
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const apiCall = `${BASE_URL}genres?key=${API_KEY}`;
    axios.get(apiCall)
      .then(response => {
        setGenres(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const apiCall = `${BASE_URL}platforms?key=${API_KEY}`;
    axios.get(apiCall)
      .then(response => {
        setPlatforms(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const apiCall = `${BASE_URL}games?key=${API_KEY}&metacritic=90,100`;
    axios.get(apiCall)
      .then(response => {
        setPopularGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    // Format the dates to match the API's expected format (YYYY-MM-DD)
    const formattedToday = formatDate(today);
    const formattedLastMonth = formatDate(lastMonth);

    const apiCall = `${BASE_URL}games?key=${API_KEY}&dates=${formattedLastMonth},${formattedToday}`;

    axios
      .get(apiCall)
      .then((response) => {
        setNewReleases(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    // Calculate the start date of next month
    const nextMonthStart = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth(),
      1
    );

    // Calculate the end date of next month
    const nextMonthEnd = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth() + 1,
      0
    );

    // Format the dates to match the API's expected format (YYYY-MM-DD)
    const formattedNextMonthStart = formatDate(nextMonthStart);
    const formattedNextMonthEnd = formatDate(nextMonthEnd);

    const apiCall = `${BASE_URL}games?key=${API_KEY}&dates=${formattedNextMonthStart},${formattedNextMonthEnd}`;

    axios
      .get(apiCall)
      .then((response) => {
        setNextReleases(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  return (
    <Router>
      <Context.Provider value={[BASE_URL, API_KEY]}>
        <Routes>
          <Route path="/" element={<HomePage games={games} setGames={setGames} genres={genres} platforms={platforms} />} />
          <Route path="/genres" element={<Genres genres={genres} setGames={setGames} />} />
          <Route path="/platforms" element={<Platforms platforms={platforms} setGames={setGames} />} />
          <Route path="/popular-games" element={<HomePage games={popularGames} setGames={setGames} genres={genres} platforms={platforms} />} />
          <Route path="/game/:id" element={<Game setGames={setGames} />} />
          <Route path="/settings" element={<Settings setGames={setGames} />} />
          <Route path="/genre/:id" element={<GameByGenre games={games} setGames={setGames} genres={genres} platforms={platforms} />} />
          <Route path="/platform/:id" element={<GamesByPlatform games={games} setGames={setGames} genres={genres} platforms={platforms} />} />
          <Route path="/new-releases" element={<HomePage games={newReleases} setGames={setGames} genres={genres} platforms={platforms} />} />
          <Route path="/next-releases" element={<HomePage games={nextReleases} setGames={setGames} genres={genres} platforms={platforms} />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
