import React from "react";
import { Header } from "../components/Header.jsx";
import { SideBar } from "../components/SideBar.jsx";
import { PlatformsList } from "../components/PlatformsList.jsx";


function Platforms({ platforms, setGames }) {
    return (
        <div>
            <Header setGames={setGames} />
            <SideBar />
            <PlatformsList platforms={platforms} />
        </div>
    );
}

export default Platforms;
