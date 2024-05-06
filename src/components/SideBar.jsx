import React from "react";
import { MdCategory, MdStarRate } from "react-icons/md";
import { GiPlatform } from "react-icons/gi";
import { Link } from "react-router-dom";


export function SideBar() {
    return (
      <section className="sidebar container">
          <ul>
            <li><Link to="/genres"><MdCategory />Genres</Link></li>
            <li>New releases</li>
            <li>Next week releases</li>
            <li><Link to="/popular-games"><MdStarRate />Popular Games</Link></li>
          </ul>
          <ul>
            <li><Link to="/platforms"><GiPlatform />Platforms</Link></li>
          </ul>
       
      </section>
    );
  }
