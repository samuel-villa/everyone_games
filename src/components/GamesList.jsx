import { GameCard } from "./GameCard.jsx";

export function GamesList({ games, genres, platforms }) {

  const getFilteredGamesByGenre = (genre) => {
    
  }
  const getFilteredGamesByPlatform = (platform) => {}

  return (
    <ul className="games-list container">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
