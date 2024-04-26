import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components/Header.jsx";
import "../App.css";
import "../scss/style.scss";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_API_KEY;
const GAME_ID = 231; // Hardcoded game ID


function Game() {
    const [game, setGame] = useState(null);

    useEffect(() => {
        const apiCall = `https://api.rawg.io/api/games/${GAME_ID}?key=${API_KEY}`;
            axios
            .get(apiCall)
            .then((response) => {
                setGame(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Header />

            <section>
                {game && ( // Check if game is not null before rendering
                    <>
                        <div className="section">
                            <div>
                                <img src={game.background_image} alt={game.name} />
                            </div>
                            <div>
                                <h2 className="title">{game.name}</h2>
                                <article className="article1">
                                    <p className="icon-text">
                                        <IoPricetagsSharp className="icon-margin" />
                                        GENRES: {game.genres.map((genre) => genre.name).join(", ")}
                                    </p>
                                    <p className="icon-text">
                                        {" "}
                                        <FaDisplay className="icon-margin" />
                                        PLATFORMS:{" "}
                                        {game.platforms
                                            .map((platform) => platform.platform.name)
                                            .join(", ")}
                                    </p>
                                    <p className="icon-text">
                                        <MdAccessTimeFilled className="icon-margin" />
                                        RELEASE DATE: {game.released}
                                    </p>
                                    <p className="icon-text">
                                        <FaGear className="icon-margin" />
                                        PUBLISHERS:&nbsp;{" "}
                                        {game.publishers.map((publisher, index) =>
                                        (
                                            <span key={index}>
                                                {publisher.name}
                                                {index !== game.publishers.length - 1 && ", "}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="icon-text">
                                        <FaGlobe className="icon-margin" />
                                        WEBSITE:&nbsp;{" "}
                                        <a
                                            href={game.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {game.website}
                                        </a>
                                    </p>
                                </article>
                            </div>
                        </div>
                        <article className="article2">
                            <h2>Game Description</h2>
                            <hr />
                            <p>{game.description_raw}</p>
                        </article>
                    </>
                )}
            </section>
        </>
    );
}

export default Game;
