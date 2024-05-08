import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { GamesList } from "../components/GamesList.jsx";
import { Context } from "../App";


function GamesByPlatform({ games, setGames, genres, platforms }) {

    const [BASE_URL, API_KEY] = useContext(Context)
    const { id } = useParams();

    useEffect(() => {
        const apiCall = `${BASE_URL}games?key=${API_KEY}&platforms=${id}`;
        axios
            .get(apiCall)
            .then((response) => {
                setGames(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <Header setGames={setGames} />
            <SideBar />
            <GamesList games={games} genres={genres} platforms={platforms} />
        </div>
    );
}

export default GamesByPlatform;
