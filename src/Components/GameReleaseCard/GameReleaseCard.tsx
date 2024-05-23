import useGameStore, { gameType } from '../../stores/useGameStore';
import './GameReleaseCard.css';

const GameReleaseCard = (props: {
    game: gameType;
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
            </div>
            <div className={`game-platform ${props.game.platform}`}>
                <span>{platformData.label}</span>
                <div>{platformData.icon}</div>
            </div>
        </div>
    )
}

export default GameReleaseCard;