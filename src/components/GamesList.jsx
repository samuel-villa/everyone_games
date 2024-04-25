import { GameCard } from "./GameCard.jsx";

export function GamesList({ games }) {
  return (
    <ul className="games-list">
      {games.map((game) => (
        // <li key={game.id}>
        //   <label htmlFor={game.id}>{game.name}</label>
          <GameCard game={ game }/>
        // </li>
      ))}
    </ul>
  );
}
