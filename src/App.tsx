import './App.css';
import Section from './Components/Section/Section';
import NavBar from './Components/Navbar/NavBar';


function App() {

  return (
    <div className='App'>
      <NavBar />
      <div className='Content'>content
        <div className='FilterBar'>filterbar</div>
        <Section />

      </div>
    </div>
  )

}

export default App
