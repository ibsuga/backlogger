import { useState, useContext } from 'react';
import { GameDataContext } from "../../App";
import GameDataDialog from "../GameDataDialog/GameDataDialog";
import { GameDataType } from "../GameDataDialog/GameDataDialog";
import './CreateGameButton.css';


const CreateGameButton = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const gameDataCtx = useContext(GameDataContext);

    const handleCreateGame = (gameData: GameDataType) => {
        let { name, platform, background } = gameData;
        if (name && platform && background) {
            const game = {
                id: Date.now(),
                name,
                platform,
                isPlaying: false,
                favorite: false,
                completion: 'unfinished',
                rating: -1,
                background
            }
            gameDataCtx.handleAddGame(game);
            setDialogOpen(false);
        }
    }

    return (
        <>
            <GameDataDialog
                btnElement={
                    <button className='CreateGameButton' onClick={() => setDialogOpen(!dialogOpen)}>
                        <span>Add Game</span>
                    </button>
                }
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                handleSubmit={handleCreateGame}
            />
        </>
    )
}

export default CreateGameButton;