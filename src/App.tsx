import { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import BacklogPage from './Components/Pages/BacklogPage/BacklogPage';
import { gameType } from './data/game_data';


function App() {
  const [page, setPage] = useState('profile');
  const [gameData, setGameData] = useState<gameType[]>(JSON.parse(localStorage.getItem('BackloggerGames') || '[]'));
  console.log(gameData)

  const handleSetGameData = (game: gameType) => {
    let games = [...gameData];
    games.push(game);
    setGameData(games);
    localStorage.setItem('BackloggerGames', JSON.stringify(games));
  }

  const pages: { [key: string]: JSX.Element } = {
    'profile': <ProfilePage gameData={gameData} setPage={setPage} />,
    'backlog': <BacklogPage gameData={gameData} setGameData={handleSetGameData} />
  }

  return (
    <div className='App'>
      <NavBar setPage={setPage} />
      <div className='Content'>
        {pages[page]}
      </div>
    </div>
  )
}

export default App
