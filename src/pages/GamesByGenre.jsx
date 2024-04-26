import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { GamesList } from "../components/GamesList.jsx";
import "../App.css";
import "../scss/style.scss";


const API_KEY = import.meta.env.VITE_API_KEY;


function GameByGenre({ games, setGames, genres, platforms }) {

    const { id } = useParams();

    useEffect(() => {
        const apiCall = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${id}`;
            axios
            .get(apiCall)
            .then((response) => {
                setGames(response.data.results);
                console.log('response.data: ', response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    
    return (
        <div className="homepage">
          <SideBar />
          <Header />
          <GamesList games={ games } genres={ genres } platforms={ platforms }/>
      </div>
    );
}

export default GameByGenre;
