import './GameCard.css'
import { gameType } from '../../stores/useGameStore'
import { IoMdTrophy } from "react-icons/io";


import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog'
import EditGameButton from '../EditGameButton/EditGameButton'



const GameCard = (props: {
    game: gameType,
    gameCompletionIcon: JSX.Element,
    gamePlatform: { 'label': string, 'icon': JSX.Element },
}) => {
    return (
        <div className="GameCard">

            <div className="game-background" style={{ background: `url(${props.game.background})` }}>
                {/* Keep the debug tools until game dialog is implemented */}
                <div className="debug-tools">
                    <DeleteGameDialog game={props.game} />
                    <EditGameButton gameData={props.game} />
                </div>
            </div>

            <div className="bottom-bar">
                <span> GAME STATUS </span>
                <div className="challenges">
                    <IoMdTrophy />
                    <span>420</span>
                </div>
            </div>

        </div>
    )
}

export default GameCard;