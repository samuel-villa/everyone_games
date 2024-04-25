import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './scss/style.scss'
const API_KEY = import.meta.env.VITE_API_KEY





function App() {
  const [games, setGames] = useState([])

  let searchApi = `https://api.rawg.io/api/games?key=${API_KEY}`

  const getGames = fetch(searchApi)
  .then(response => response.json())
  .then(data => console.log(data.results))
  .catch(error => console.error(error))
    

  return (
    <>
      <div>
        <ul>
        <li>{games}</li>
        </ul>
      </div>
    </>
  )
}

export default App
