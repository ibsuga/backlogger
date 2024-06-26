import { useState, createContext, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
// import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import './App.css';
import ReleasesCalendar from './pages/ReleasesCalendar/ReleasesCalendar';
import CompletedGamesPage from './pages/CompletedGamesPage/CompletedGamesPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';

export const GameDataContext = createContext<any>(null);

function App() {
  const [page, setPage] = useState('home');
  const [platformFilter, setPlatformFilter] = useState('');

  useEffect(() => {
    setPlatformFilter('')
  }, [page])

  const pages: { [key: string]: JSX.Element } = {
    // 'profile': <Profile setPage={setPage} />,
    'home': <Home setPage={setPage} />,
    'calendar': <ReleasesCalendar />,
    'completed': <CompletedGamesPage />,
    'activities': <ActivitiesPage />
  }

  const ctx_value = { platformFilter };

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
