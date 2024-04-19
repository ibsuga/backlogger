import { useState, useContext } from 'react';
import { gameType } from '../../data/game_data';
import { GameDataContext } from "../../App";
import { MdEditSquare } from "react-icons/md";
import GameDataDialog from "../GameDataDialog/GameDataDialog";
import { GameDataType } from "../GameDataDialog/GameDataDialog";


const EditGameButton = (props: {
    gameData: gameType
}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const gameDataCtx = useContext(GameDataContext);

    const handleEditGame = (gameData: GameDataType) => {
        let { name, platform, background } = gameData;

        if (name && platform && background) {
            let game = { ...props.gameData };
            game.name = name;
            game.platform = platform;
            game.background = background;
            gameDataCtx.handleUpdateGame(game);
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
            />
        </>
    )
}

export default EditGameButton;