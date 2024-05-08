import { GenreCard } from "./GenreCard.jsx";

export function GenresList({ genres }) {
  return (
    <section className="genres-list-section">
      <h2>Genres</h2>
      <ul className="genres-list container">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </ul>
    </section>
  );
}
