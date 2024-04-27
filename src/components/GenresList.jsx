import { GenreCard } from "./GenreCard.jsx";

export function GenresList({ genres }) {
  return (
    <ul className="genres-list container">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </ul>
  );
}
