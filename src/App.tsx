import { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import BacklogPage from './Components/Pages/BacklogPage/BacklogPage';


function App() {
  const [page, setPage] = useState('profile');


  const pages: { [key: string]: JSX.Element } = {
    'profile': <ProfilePage setPage={setPage} />,
    'backlog': <BacklogPage />
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
