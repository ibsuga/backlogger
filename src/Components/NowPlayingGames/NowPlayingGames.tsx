import { gameType } from '../../data/game_data';
import GameCollection from '../GameCollection/GameCollection';

const NowPlayingGames = (props: {
    gameList: gameType[]
}) => {

    let now_playing_games = props.gameList.filter((game: gameType) => game.isPlaying === true);

    return (
        <GameCollection gameList={now_playing_games} title={'Now Playing'} />
    )
}

export default NowPlayingGames;