import { FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";


const platformsLogos = {
    'pc': <FaWindows />,
    'xbox': <FaXbox />,
    'playstation': <FaPlaystation />,
    'mac': <FaApple />,
    'linux': <FaLinux />,
    'nintendo': <BsNintendoSwitch />,
    'android': <FaAndroid />,
    'atari': <SiAtari />,
    'commodore': <SiCommodore />,
    'sega': <SiSega />,
    'web': <TbWorldWww />,
}


export function GameCard({ game }) {

    const getPlatformLogo = (slug) => {
        const platformLogo = platformsLogos[slug];
        return platformLogo || null;
    };

    return (
        <Link to={`/game/${game.id}`} >
            <article className="gameCard">
                <div className="gameCard2">
                    <div className="gameCard__shown">
                        <div className="imgCont"><img src={game.background_image} alt="game-bg-img"></img></div>
                        <div className="visibleDesc">
                            <ul className="platforms">
                                {game.parent_platforms.map((pf) => (
                                    pf.platform.slug in platformsLogos && (
                                        <li key={pf.platform.id}>
                                            {getPlatformLogo(pf.platform.slug)}
                                        </li>
                                    )
                                ))}
                            </ul>
                            <h2>{game.name}</h2>
                            <button className="added">
                                <FaPlus />
                                <p>{game.added}</p>
                            </button>

                            <div className="gameCard__hidden">
                                <ul>
                                    <li><p>Rate:</p><p>{game.rating}</p></li>
                                    <li><p>Release Date:</p><p>{game.released}</p></li>
                                    <ul className="genres">
                                        <p>Genres: </p>
                                        {game.genres.map((genre) => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))}
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </Link>
    );
}
