import React from "react";
import { Link } from "react-router-dom";


export function SideBar() {
    return (
      <section className="sidebar">
        <h1>SideBAr</h1>
        <ul>
          <li><Link to="/genres">Genres</Link></li>
        </ul>
       
      </section>
    );
  }
