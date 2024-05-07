import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import { MdCategory, MdStarRate, MdNewReleases } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GiPlatform } from "react-icons/gi";
import { Link } from "react-router-dom";


function DropdownMenu() {
    // State to manage the visibility of the dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [isHamOpen, setIsHamOpen] = useState(false)

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsHamOpen(!isHamOpen);
    };

    return (
        <div className="dropdown">
            <Hamburger toggled={isHamOpen} toggle={toggleDropdown} />

            {/* Dropdown content */}
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li><Link to="/new-releases"><FaFire />New releases</Link></li>
                        <li><Link to="/next-releases"><MdNewReleases />Next Week releases</Link></li>
                        <li><Link to="/popular-games"><MdStarRate />Popular Games</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/genres"><MdCategory />Genres</Link></li>
                        <li><Link to="/platforms"><GiPlatform />Platforms</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
