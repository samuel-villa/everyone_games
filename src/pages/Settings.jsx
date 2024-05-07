import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";


function Settings({ setGames }) {
    return (
        <div>
            <Header setGames={ setGames }/>
            <SideBar />
            <h2>Settings</h2>
        </div>
    );
}

export default Settings;
