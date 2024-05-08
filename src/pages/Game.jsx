import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { SideBar } from "../components/SideBar.jsx";
import "../App.css";
import "../scss/style.scss";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;

const platformsLogos = {
  pc: <FaWindows />,
  xbox: <FaXbox />,
  playstation: <FaPlaystation />,
  mac: <FaApple />,
  linux: <FaLinux />,
  nintendo: <BsNintendoSwitch />,
  android: <FaAndroid />,
  atari: <SiAtari />,
  commodore: <SiCommodore />,
  sega: <SiSega />,
  web: <TbWorldWww />,
};

function Game({ setGames }) {
  const [game, setGame] = useState(null);
  const [seriesGames, setSeriesGames] = useState([]);
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(null);

  const getPlatformLogo = (slug) => {
    const platformLogo = platformsLogos[slug];
    return platformLogo || null;
  };

  useEffect(() => {
    const apiCall = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    axios
      .get(apiCall)
      .then((response) => {
        setGame(response.data);
        const suggestedGamesApiCall = `https://api.rawg.io/api/games/${response.data.id}/game-series?key=${API_KEY}`;
        axios
          .get(suggestedGamesApiCall)
          .then((seriesResponse) => {
            setSeriesGames(seriesResponse.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    const apiCall = `https://api.rawg.io/api/games/${id}/movies?key=${API_KEY}`;
    axios
      .get(apiCall)
      .then((response) => {
        setShowTrailer(response.data.results[0].data["480"]);
        console.log(showTrailer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="gameDetail container">
      <Header setGames={setGames} />
      <SideBar />

      <section className="gamePage">
        {game && ( // Check if game is not null before rendering
          <>
            <div className="section">
              <div>
                <img
                  className="picture"
                  src={game.background_image}
                  alt={game.name}
                />
                {game.background_image_additional && ( // Check if background_image_additional exists
                  <img
                    className="picture trailer"
                    src={game.background_image_additional}
                    alt={game.name}
                  />
                )}
                <video className="picture" autoPlay muted>
                  <source src={showTrailer} type="video/mp4" />
                </video>
              </div>
              <div>
                <h2 className="title">{game.name}</h2>
                <div className="share">
                  {/* SHARE SECTION */}
                  <div className="card">
                    <span>SHARE</span>
                    <a className="social-link" href="#">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 461.001 461.001"
                        xmlSpace="preserve"
                        fill="#000000"
                      >
                        <path
                          style={{ fill: "#F61C0D" }}
                          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                        ></path>
                      </svg>
                    </a>
                    <a className="social-link" href="#">
                      <svg
                        fill="#000000"
                        viewBox="0 -28.5 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        preserveAspectRatio="xMidYMid"
                      >
                        <path
                          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                          fill="#5865F2"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </a>
                    <a className="social-link" href="#">
                      <svg
                        fill="#000000"
                        viewBox="0 0 512 512"
                        id="icons"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
                      </svg>
                    </a>
                    <a className="social-link" href="#">
                      <svg
                        fill="#646cff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.373 0 0 5.374 0 12c0 5.64 4.123 10.308 9.516 11.19V15.69H6.75v-3.915h2.766V9.624c0-2.744 1.635-4.262 4.146-4.262 1.2 0 2.348.088 2.673.127v2.892H14.78c-1.44 0-1.722.685-1.722 1.69v2.22h3.446l-.45 3.915h-2.996V23c5.12-.63 9.015-5.343 9.015-10.995C24 5.373 18.627 0 12 0"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                {/* DETAILS SECTION */}
                <article className="article1">
                  <p className="icon-text">
                    <IoPricetagsSharp className="icon-margin" />
                    GENRES: {game.genres.map((genre) => genre.name).join(", ")}
                  </p>
                  <p className="icon-text">
                    <FaStar className="icon-margin" />
                    RATING: {game.rating} / {game.rating_top}
                  </p>

                  <p className="icon-text">
                    <MdAccessTimeFilled className="icon-margin" />
                    RELEASE DATE: {game.released}
                  </p>
                  <p className="icon-text">
                    <FaGear className="icon-margin" />
                    PUBLISHERS:&nbsp;{" "}
                    {game.publishers.map((publisher, index) => (
                      <span key={index}>
                        {publisher.name}
                        {index !== game.publishers.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="icon-text">
                    <FaGlobe className="icon-margin" />{" "}
                    <a
                      href={game.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GO TO WEBSITE
                    </a>
                  </p>
                </article>
              </div>
            </div>
            {/* PLATFORMS SECTION */}
            <section>
              <div className="platform-icons">
                <ul className="icon">
                  {game.parent_platforms.map(
                    (pf) =>
                      pf.platform.slug in platformsLogos && (
                        <li key={pf.platform.id} className="platform-item">
                          <span className="platform-icon">
                            {getPlatformLogo(pf.platform.slug)}
                          </span>
                          <span className="platform-name">
                            {pf.platform.name}
                          </span>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </section>
            {/* ABOUT SECTION */}
            <article className="article2">
              <h3>Game Description</h3>
              <hr />
              <p>{game.description_raw}</p> <br />
              <hr />
              <p>Last Updated on:&nbsp;{game.updated}</p>
            </article>
            {/* SERIES SECTION */}

            <section>
              {seriesGames.length > 0 && <h2>Games series for {game.name}</h2>}
              <div className="series-games-container">
                {seriesGames.map((seriesGame) => (
                  <div key={seriesGame.id} className="gameCard">
                    <Link to={`/game/${seriesGame.id}`}>
                      <div className="gameCard2">
                        <div className="gameCard__shown">
                          <div className="imgCont">
                            <img
                              src={seriesGame.background_image}
                              alt={seriesGame.name}
                            />
                          </div>
                          <div className="visibleDesc">
                            <h3>{seriesGame.name}</h3>
                            <p>Release Date: {seriesGame.released}</p>
                            <p>Rating: {seriesGame.rating}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default Game;
