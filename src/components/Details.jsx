const API_KEY = import.meta.env.VITE_API_KEY


let gameId = 100


export function Details() {

    let gameCallApi = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`

    const getGames = fetch(gameCallApi)
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(error => console.error(error))

    return (
      <section>
        <h1>Game 100</h1>
      </section>
    );
  }