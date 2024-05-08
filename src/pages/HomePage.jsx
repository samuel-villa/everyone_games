import React from "react";
import { Header } from "../components/Header.jsx";
import { GamesList } from "../components/GamesList.jsx";
import { SideBar } from "../components/SideBar.jsx";


function HomePage({ games, setGames, genres, platforms }) {

  return (
    <div>
      <Header setGames={setGames} />
      <SideBar />
      <GamesList games={games} setGames={setGames} genres={genres} platforms={platforms} />
    </div>
  );
}

export default HomePage;