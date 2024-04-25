export function GameCard({ game }) {
  return (
    <div className="card">
      <div className="card2">
        <img src={game.background_image} alt="game-bg-img"></img>
        <h2>{game.name}</h2>
        <ul className="platforms">
            {game.parent_platforms.map((pf) => (
                <li key={pf.platform.id}>{pf.platform.name}</li>
            ))}
        </ul>
        <p>{game.added}</p>
        <p>{game.metacritic}</p>
        <p>{game.rating}</p>
        <p>{game.released}</p>
        <ul className="genres">
            {game.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
