import { Link } from "react-router-dom";


export function GenreCard({ genre }) {

  return (
    <Link to={`/genre/${genre.id}`}>
      <article className="genreCard">
        <img src={genre.image_background} alt="bg_image" />
        <div className="gamesCount">
          <p>Games</p>
          <p>{genre.games_count}</p>
        </div>
        <p className="genreName">{genre.name}</p>
      </article>
    </Link>
  );
}
