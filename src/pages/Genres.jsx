import React from "react";
import { Header } from "../components/Header.jsx";
import { GenresList } from "../components/GenresList.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";


function Genres({ genres, setGames }) {
    return (
        <div>
            <Header setGames={ setGames }/>
            <SideBar />
            <GenresList genres={ genres }/>
        </div>
    );
}

export default Genres;
