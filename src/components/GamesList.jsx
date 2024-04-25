import { GameCard } from "./GameCard.jsx";

export function GamesList({ games }) {
  return (
    <ul className="games-list container">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
