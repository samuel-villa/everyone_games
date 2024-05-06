import { GenreCard } from "./GenreCard.jsx";

export function GenresList({ genres }) {
  return (
    <div>
      <h2>Genres</h2>
      <ul className="genres-list container">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </ul>
    </div>
  );
}
