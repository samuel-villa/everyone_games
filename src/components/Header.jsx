import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import { Context } from "../App";


export function Header({ setGames }) {

  const [BASE_URL, API_KEY] = useContext(Context)
  const [input, setInput] = useState('');

  useEffect(() => {
    let apiCall = ''
    if (input.length > 2) apiCall = `${BASE_URL}games?key=${API_KEY}&search=${input}`;
    else apiCall = `${BASE_URL}games?key=${API_KEY}`;
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
      <DropdownMenu />
      <Link to="/"><h1>EveryoneGames</h1></Link>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..."></input>
      <Link className="settings" to="/settings"><IoSettingsOutline /></Link>
    </header>
  );
}
