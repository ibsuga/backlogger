import { useState, createContext, useEffect } from 'react';
import { gameType } from './data/game_data';
import NavBar from './Components/Navbar/NavBar';
import Profile from './pages/Profile/Profile';
import Backlog from './pages/Backlog/Backlog';
import Home from './pages/Home/Home';
import './App.css';

export const GameDataContext = createContext<any>(null);

function App() {
  const [page, setPage] = useState('home');
  const [gameData, setGameData] = useState<gameType[]>(JSON.parse(localStorage.getItem('BackloggerGames') || '[]'));
  const [platformFilter, setPlatformFilter] = useState('');

  useEffect(() => {
    setPlatformFilter('')
  }, [page])

  const handleAddGame = (game: gameType) => {
    let games = [...gameData];
    games.push(game);
    setGameData(games);
    localStorage.setItem('BackloggerGames', JSON.stringify(games));
  }

  const handleDeleteGame = (id: number) => {
    let games = gameData.filter((game: gameType) => game.id !== id);
    setGameData(games);
    localStorage.setItem('BackloggerGames', JSON.stringify(games));
  }

  const handleUpdateGame = (game: gameType) => {
    let games = [...gameData];
    const game_index = games.findIndex((g: gameType) => g.id === game.id);
    if (game_index !== -1) {
      games[game_index] = { ...game };
    }
    setGameData(games);
    localStorage.setItem('BackloggerGames', JSON.stringify(games));
  }

  const pages: { [key: string]: JSX.Element } = {
    'home': <Home gameData={gameData} />,
    'profile': <Profile gameData={gameData} setPage={setPage} />,
    'backlog': <Backlog gameData={gameData} />
  }

  const ctx_value = { handleAddGame, handleUpdateGame, handleDeleteGame, platformFilter };

  return (
    <div className={'App'}>
      <GameDataContext.Provider value={ctx_value}>
        <NavBar setPage={setPage} platformFilter={platformFilter} setPlatformFilter={setPlatformFilter} />
        <div className='Content'>
          {pages[page]}
        </div>
      </GameDataContext.Provider>
    </div>
  )
}

export default App
