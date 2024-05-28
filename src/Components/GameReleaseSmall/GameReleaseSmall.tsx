import './GameReleaseSmall.css';
import DeleteGameDialog from '../DeleteGameDialog/DeleteGameDialog';
import EditGameButton from '../EditGameButton/EditGameButton';
import useGameStore, { gameType } from '../../stores/useGameStore';

const GameReleaseSmall = (props: {
    game: gameType
}) => {
    const [getPlatformData] = useGameStore((state) => [state.getPlatformData])
    const platformData = getPlatformData(props.game.platform)

    const date = new Date(props.game.date!);
    const year = date.getFullYear();
    const month = date.toLocaleDateString('default', { month: 'long' })
    const day = date.getDate();

    return (
        <div className="GameReleaseSmall">
            <div className='game-image' style={{ backgroundImage: `url(${props.game.background})` }}></div>
            <div className='game-content'>
                <div className='game-name'>{props.game.name}</div>
                <div className='game-tools'>
                    <p className="release-date">{`${month} ${day}, ${year}`}</p>
                    <div className='game-buttons'>
                        <DeleteGameDialog game={props.game} />
                        <EditGameButton gameData={props.game} />
                        <div className={`game-platform ${props.game.platform}`}>{platformData.shortLabel}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameReleaseSmall;