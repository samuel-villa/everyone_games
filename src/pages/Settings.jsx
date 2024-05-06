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
            Settings
        </div>
    );
}

export default Settings;
