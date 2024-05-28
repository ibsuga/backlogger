import useGameStore, { gameType } from '../../stores/useGameStore';
import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog';
import EditGameButton from '../EditGameButton/EditGameButton';
import './GameReleaseCard.css';

const GameReleaseCard = (props: {
    game: gameType;
    hideTools?: boolean;
}) => {
    const [getPlatformData] = useGameStore((state) => [state.getPlatformData])
    const platformData = getPlatformData(props.game.platform)

    const date = new Date(props.game.date!);
    const year = date.getFullYear();
    const month = date.toLocaleDateString('default', { month: 'long' })
    const day = date.getDate();


    return (
        <div className="GameReleaseCard">
            <div className="game-content" style={{ background: `url(${props.game.background})` }}>
                <p className="release-date">{`${month} ${day}, ${year}`}</p>
                <div className="game-name"><span>{props.game.name}</span></div>
                {
                    !props.hideTools &&
                    <div className='game-tools'>
                        <EditGameButton gameData={props.game} />
                        <DeleteGameDialog game={props.game} />
                    </div>
                }

            </div>
            <div className={`game-platform ${props.game.platform}`}>
                <span>{platformData.label}</span>
                <div>{platformData.icon}</div>
            </div>
        </div>
    )
}

export default GameReleaseCard;