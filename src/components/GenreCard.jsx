export function GenreCard({ genre }) {
  
  return (
    <div className="genreCard">
      <p className="heading">Popular this month</p>
      <div>
        <p>Games</p>
        <p>{genre.games_count}</p>
        <p>{genre.id}</p>
      </div>
      <p>{genre.name}</p>
    </div>
  );
}
