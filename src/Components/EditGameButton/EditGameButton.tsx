import { useState } from 'react';

import { MdEditSquare } from "react-icons/md";
import GameDataDialog from "../GameDataDialog/GameDataDialog";
import { GameDataType } from "../GameDataDialog/GameDataDialog";
import useGameStore, { gameType } from '../../stores/useGameStore';


const EditGameButton = (props: {
    gameData: gameType
}) => {
    const updateGame = useGameStore((state) => state.updateGame)
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleEditGame = (gameData: GameDataType) => {
        let { name, platform, background, date } = gameData;

        if (name && platform && background) {
            let game = { ...props.gameData };
            game.name = name;
            game.platform = platform;
            game.background = background;
            game.date = date;
            updateGame(game);
            setDialogOpen(false);
        }
    }

    return (
        <>
            <GameDataDialog
                btnElement={
                    <MdEditSquare className={'tool'} onClick={() => setDialogOpen(!dialogOpen)} />
                }
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                handleSubmit={handleEditGame}
                defaultName={props.gameData.name}
                defaultBackground={props.gameData.background}
                defaultPlatform={props.gameData.platform}
                defaultDate={props.gameData.date}
            />
        </>
    )
}

export default EditGameButton;