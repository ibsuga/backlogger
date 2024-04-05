import { useState, createContext } from 'react';
import { gameType } from './data/game_data';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import BacklogPage from './Components/Pages/BacklogPage/BacklogPage';
import './App.css';

export const GameDataContext = createContext<any>(null);

function App() {
  const [page, setPage] = useState('profile');
  const [gameData, setGameData] = useState<gameType[]>(JSON.parse(localStorage.getItem('BackloggerGames') || '[]'));

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
    'profile': <ProfilePage gameData={gameData} setPage={setPage} />,
    'backlog': <BacklogPage gameData={gameData} />
  }

  const ctx_value = { handleAddGame, handleUpdateGame, handleDeleteGame };

  return (
    <div className='App'>
      <GameDataContext.Provider value={ctx_value}>
        <NavBar setPage={setPage} />
        <div className='Content'>
          {pages[page]}
        </div>
      </GameDataContext.Provider>
    </div>
  )
}

export default App
