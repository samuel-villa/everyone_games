import React from "react";
import { Link } from "react-router-dom";


export function SideBar() {
    return (
      <section className="sidebar">
          <ul>
            <li><Link to="/genres">Genres</Link></li>
            <li>New releases</li>
            <li>Next week releases</li>
            <li>Popular Games</li>
          </ul>
       
      </section>
    );
  }
