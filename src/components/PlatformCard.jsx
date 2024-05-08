import { Link } from "react-router-dom";


export function PlatformCard({ platform }) {

  return (
    <Link to={`/platform/${platform.id}`}>
      <article className="genreCard">
        <img src={platform.image_background} alt="bg_image" />
        <div className="gamesCount">
          <p>Games</p>
          <p>{platform.games_count}</p>
        </div>
        <p className="genreName">{platform.name}</p>
      </article>
    </Link>
  );
}
