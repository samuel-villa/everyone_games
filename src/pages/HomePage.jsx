import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Header } from "../components/Header.jsx";
import { GamesList } from "../components/GamesList.jsx";
import { SideBar } from "../components/SideBar.jsx";


const API_KEY = import.meta.env.VITE_API_KEY;


function HomePage() {
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
      <div className="homepage">
          <SideBar />
          <Header />
          <GamesList games={ games }/>
      </div>
    );
  }
  
  export default HomePage;