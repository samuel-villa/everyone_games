import React, { useEffect, useState } from "react";
import axios from 'axios';
import { GameCard } from "./GameCard.jsx";


const API_KEY = import.meta.env.VITE_API_KEY;


export function GamesList({ games, setGames, genres, platforms }) {

  const [filterType, setFilterType] = useState(['']);

  useEffect(() => {
    const apiCall = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=${filterType}`;
    console.log('apiCall: ', apiCall);
    axios.get(apiCall)
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [filterType]);

  const handleClick = e => {
    const filter = e.target.dataset.key;
    setFilterType(filter)
  }

  return (
    <>
      <div className="filters">
      <h3>Filter By:</h3>
        <div className="filterByCont"><button data-key="name" className="filterBy" onClick={ handleClick }>Name</button></div>
        <div className="filterByCont"><button data-key="added" className="filterBy" onClick={ handleClick }>Date Added</button></div>
        <div className="filterByCont"><button data-key="released" className="filterBy" onClick={ handleClick }>Release Date</button></div>
        <div className="filterByCont"><button data-key="" className="filterBy" onClick={ handleClick }>All</button></div>
      </div>

      <ul className="games-list container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </>
  );
}
