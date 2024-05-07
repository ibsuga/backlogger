import { gameType } from '../../data/game_data';
import './SmallGame.css'


const SmallGame = (props: {
    game: gameType;
}) => {
    return (
        <div className="SmallGame">
            <div className='small-game-image' style={{ backgroundImage: `url(${props.game.background})` }}></div>
            <div className='small-game-content'>
                <div className='small-game-name'>{props.game.name}</div>
                <div className='small-game-platform'>{props.game.platform}</div>
            </div>

        </div>
    )
}

export default SmallGame;