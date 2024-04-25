import { useState, useEffect } from "react";
import axios from 'axios';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./scss/style.scss";
import { Header } from "./components/Header.jsx";
import { GamesList } from "./components/GamesList.jsx";
import { Details } from "./components/Details.jsx";

const API_KEY = import.meta.env.VITE_API_KEY;


function App() {
  const [games, setGames] = useState([])

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


  return (
    <>
      <Header />
      <GamesList games={ games }/>
    </>
  );
}

export default App;
