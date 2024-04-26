import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header.jsx";
import { GenresList } from "../components/GenresList.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";

const API_KEY = import.meta.env.VITE_API_KEY;


function Genres() {
    const [genres, setGenres] = useState([])

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
        <>
            <Header />
            <SideBar />
            <GenresList genres={ genres }/>
        </>
    );
}

export default Genres;
