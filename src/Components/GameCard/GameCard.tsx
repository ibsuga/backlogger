import { useState } from 'react';
import { createPortal } from 'react-dom';
import { gameType } from '../../stores/useGameStore';
import GameDialog from '../GameDialog/GameDialog';
import { IoMdTrophy } from "react-icons/io";
import './GameCard.css';


const GameCard = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'icon': JSX.Element },
}) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="GameCard" onClick={() => setDialogOpen(!dialogOpen)}>
            <div className="game-background" style={{ background: `url(${props.game.background})` }} />
            <div className="bottom-bar">
                <span> GAME STATUS </span>
                <div className="challenges">
                    <IoMdTrophy />
                    <span>420</span>
                </div>
            </div>
            {
              dialogOpen && createPortal(
                <GameDialog gameData={props.game} handleClose={() => setDialogOpen(false)} />, document.body
              )
            }
        </div>
    )
}

export default GameCard;