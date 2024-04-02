import { useState } from 'react';
import './CreateGameButton.css'
import { gameType } from '../../data/game_data';


const CreateGameButton = (props: {
    setGameData: (game: gameType) => void;
}) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('-');

    const handleSubmitGame = () => {
        if (name != '' && platform != '-') {
            console.log(name, platform);
            const game = {
                name,
                platform,
                status: '-',
                favorite: '-'
            }
            props.setGameData(game);
            setName('')
            setPlatform('-')
        }
    }

    return (
        <>
            <button className='CreateGameButton' onClick={() => setDialogOpen(!dialogOpen)}>
                <span>+</span>
            </button>
            {
                dialogOpen &&       //if dialogOpen returns true:
                <div className='CreateGameDialog'>
                    <div className='content'>
                        <div className='GameName'>
                            <label>Game Title</label>
                            <input placeholder='Game you want to play...' type='text' value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='Platform'>
                            <label>Platform</label>
                            <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                                <option value="-">-</option>
                                <option value="steam">Steam</option>
                                <option value="nsw">Nintendo Switch</option>
                                <option value="ps5">PlayStation 5</option>
                            </select>
                        </div>
                        <button className='SubmitGame' onClick={handleSubmitGame}>Submit Game</button>
                    </div>
                    <button className='CloseDialog' onClick={() => setDialogOpen(false)}>x</button>
                </div>
            }
        </>
    )
}

export default CreateGameButton;