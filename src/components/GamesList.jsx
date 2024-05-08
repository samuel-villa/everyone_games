import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { GameCard } from "./GameCard.jsx";
import { Context } from "../App";


export function GamesList({ games, setGames, genres, platforms }) {

  const [BASE_URL, API_KEY] = useContext(Context)
  const [filterType, setFilterType] = useState(['']);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGames();
  }, []); // Fetch initial set of games when component mounts

  const fetchGames = async () => {
    try {
      setLoading(true);
      const apiCall = nextPage || `${BASE_URL}games?key=${API_KEY}`;
      const response = await axios.get(apiCall);
      const { results, next } = response.data;
      setGames(prevGames => [...prevGames, ...results.map(game => ({ ...game, uuid: uuidv4() }))]);
      setNextPage(next); // Update next page URI
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && nextPage) {
      fetchGames();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, nextPage]);

  useEffect(() => {
    const apiCall = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=${filterType}`;
    axios.get(apiCall)
      .then(response => {
        setGames(response.data.results.map(game => ({ ...game, uuid: uuidv4() })));
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
      <section className="filters">
        <h3>Filter By:</h3>
        <div className="filterByCont"><button data-key="" className="filterBy" onClick={handleClick}>All</button></div>
        <div className="filterByCont"><button data-key="name" className="filterBy" onClick={handleClick}>Name</button></div>
        <div className="filterByCont"><button data-key="added" className="filterBy" onClick={handleClick}>Date Added</button></div>
        <div className="filterByCont"><button data-key="released" className="filterBy" onClick={handleClick}>Release Date</button></div>
      </section>

      <ul className="games-list container">
        {games.map((game) => (
          <GameCard key={game.uuid} game={game} />
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </>
  );
}
