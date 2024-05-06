import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import { PlatformsList } from "../components/PlatformsList.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";


function Platforms({ platforms }) {
    return (
        <div className="platformsPage">
            <Header />
            <SideBar />
            <PlatformsList platforms={ platforms }/>
        </div>
    );
}

export default Platforms;
