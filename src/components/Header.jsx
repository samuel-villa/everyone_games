import React from "react";
import { Link } from "react-router-dom";


export function Header() {
    return (
      <header className="container">
        <h1>EveryoneGames</h1>
        <Link to="/games">Go to details</Link>
      </header>
    );
  }
