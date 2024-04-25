export function GamesList({ games }) {
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <label htmlFor={game.id}>{game.name}</label>
        </li>
      ))}
    </ul>
  );
}
