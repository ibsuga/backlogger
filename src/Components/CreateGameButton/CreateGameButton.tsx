import { FaWindowClose } from "react-icons/fa";
import { useState, useRef, useContext } from 'react';
import { GameDataContext } from "../../App";
import './CreateGameButton.css';


const CreateGameButton = () => {
    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('-');
    const ref: any = useRef(null);
    const gameDataCtx = useContext(GameDataContext);

    const handleOpenDialog = () => {
        if (ref.current?.open) ref.current.close();
        else ref.current?.showModal()
    }

    const handleSubmitGame = () => {
        if (name != '' && platform != '-') {
            console.log(name, platform);
            const game = {
                id: Date.now(),
                name,
                platform,
                status: 'to-play',
                favorite: false,
                rating: -1
            }
            gameDataCtx.handleAddGame(game);
            setName('')
            setPlatform('-')
            ref.current.close()
        }
    }

    return (
        <>
            <button className='CreateGameButton' onClick={handleOpenDialog}>
                <span>Add Game</span>
            </button>
            <dialog
                ref={ref}
                className="create-game-dialog"
            >
                <div className="dialog-content">
                    <FaWindowClose className='close-dialog' onClick={handleOpenDialog}>x </FaWindowClose>
                    <div>
                        <label>Game Title</label>
                        <input placeholder='Game you want to play...' type='text' value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <label>Platform</label>
                        <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                            <option hidden value="-">-</option>
                            <option value="steam">Steam</option>
                            <option value="nsw">Nintendo Switch</option>
                            <option value="ps5">PlayStation 5</option>
                        </select>
                    </div>
                    <button className='submit-game' onClick={handleSubmitGame}>Submit Game</button>
                </div>
            </dialog>
        </>
    )
}

export default CreateGameButton;