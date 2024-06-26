import { useState } from 'react';
import GameDataDialog from "../GameDataDialog/GameDataDialog";
import { GameDataType } from "../GameDataDialog/GameDataDialog";
import './CreateGameButton.css';
import useGameStore, { gameType } from '../../stores/useGameStore';
import useActivityStore from '../../stores/useActivityStore';



const CreateGameButton = () => {
    const addGame = useGameStore((state) => state.addGame)
    const addActivity = useActivityStore((state) => state.addActivity)
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleCreateGame = (gameData: GameDataType) => {
        let { name, platform, background, date } = gameData;
        if (name && platform && background) {
            const game: gameType = {
                id: Date.now(),
                name,
                platform,
                isPlaying: false,
                isFavorite: false,
                completion: 'unfinished',
                rating: -1,
                background,
                date
            }
            addGame(game);
            addActivity('add', game.name, game.background);
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