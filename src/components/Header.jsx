import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;


export function Header({ setGames }) {

  const [input, setInput] = useState('');

  useEffect(() => {
    let apiCall = ''
    if (input.length > 2) apiCall = `https://api.rawg.io/api/games?key=${API_KEY}&search=${input}`;
    else apiCall = `https://api.rawg.io/api/games?key=${API_KEY}`;
    axios
      .get(apiCall)
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [input]);

  return (
    <header className="container">
      <Link to="/"><h1>EveryoneGames</h1></Link>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..."></input>
      <Link className="settings" to="/settings"><IoSettingsOutline /></Link>
    </header>
  );
}
