import React from "react";
import { MdCategory, MdStarRate, MdNewReleases } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";
import { Link } from "react-router-dom";


export function SideBar() {
  return (
    <section className="sidebar container">

      <ul>
        <li><Link to="/new-releases"><FaFire />New releases</Link></li>
        <li><Link to="/next-releases"><MdNewReleases />Next Week releases</Link></li>
        <li><Link to="/popular-games"><MdStarRate />Popular Games</Link></li>
      </ul>

      <ul>
        <li><Link to="/genres"><MdCategory />Genres</Link></li>
        <li><Link to="/platforms"><GiPlatform />Platforms</Link></li>
      </ul>

    </section>
  );
}
