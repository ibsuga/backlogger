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
                dialogOpen &&
                <div className='CreateGameDialog'>
                    <label>Game Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
                    <label>Platform</label>
                    <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                        <option value="-">-</option>
                        <option value="steam">Steam</option>
                        <option value="nsw">Nintendo Switch</option>
                        <option value="ps5">PlayStation 5</option>
                    </select>
                    <button className='CloseDialog' onClick={() => setDialogOpen(false)}>X</button>
                    <button className='SubmitGame' onClick={handleSubmitGame}>Submit Game</button>
                </div>
            }
        </>
    )
}

export default CreateGameButton;