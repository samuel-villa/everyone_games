import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import { GenresList } from "../components/GenresList.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";


function Genres({ genres }) {
    return (
        <>
            <Header />
            <SideBar />
            <GenresList genres={ genres }/>
        </>
    );
}

export default Genres;
