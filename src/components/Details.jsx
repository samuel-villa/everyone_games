const API_KEY = import.meta.env.VITE_API_KEY


let gameId = 100
let gameCallApi = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`

