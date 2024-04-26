import React, { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";
import { GamesList } from "../components/GamesList.jsx";
import { SideBar } from "../components/SideBar.jsx";


function HomePage({ games, genres, platforms }) {

    return (
      <div className="homepage">
          <SideBar />
          <Header />
          <GamesList games={ games } genres={ genres } platforms={ platforms }/>
      </div>
    );
  }
  
  export default HomePage;