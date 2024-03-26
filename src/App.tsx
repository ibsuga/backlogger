import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/ProfilePage/ProfilePage';


function App() {

  return (
    <div className='App'>
      <NavBar />
      <div className='Content'>
        <ProfilePage />
      </div>
    </div>
  )
}

export default App
