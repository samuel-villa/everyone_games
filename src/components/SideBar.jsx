import React from "react";
import { Link } from "react-router-dom";


export function SideBar() {
    return (
      <section className="sidebar">
          <ul>
            <li><Link to="/genres">Genres</Link></li>
            <li>New releases</li>
            <li>Next week releases</li>
            <li><Link to="/popular-games">Popular Games</Link></li>
          </ul>
          <ul>
            <li><Link to="/platforms">Platforms</Link></li>
          </ul>
       
      </section>
    );
  }
