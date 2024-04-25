import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import "./scss/style.scss";
import { Header } from "./components/Header.jsx";
import { GamesList } from "./components/GamesList.jsx";
import { GenresList } from "./components/GenresList.jsx";
import { Details } from "./components/Details.jsx";

const API_KEY = import.meta.env.VITE_API_KEY;


function App() {
  const [games, setGames] = useState([])
  const [genres, setGenres] = useState([])

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


  return (
    // <GamesList games={ games }/>
    <GenresList genres={ genres }/>
  );
}

export default App;
