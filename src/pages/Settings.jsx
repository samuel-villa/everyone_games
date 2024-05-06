import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import "../App.css";
import "../scss/style.scss";
import { SideBar } from "../components/SideBar.jsx";


function Settings() {
    return (
        <div>
            <Header />
            <SideBar />
            <h2>Settings</h2>
        </div>
    );
}

export default Settings;
