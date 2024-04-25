import { GameCard } from "./GameCard.jsx";

export function GamesList({ games }) {
  return (
    <ul className="games-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
