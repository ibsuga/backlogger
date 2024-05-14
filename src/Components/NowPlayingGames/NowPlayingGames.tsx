import useGameStore from '../../stores/useGameStore';
import { gameType } from '../../data/game_data';
import GameCollection from '../GameCollection/GameCollection';

const NowPlayingGames = () => {
    const games = useGameStore((state) => state.games);
    let now_playing_games = games.filter((game: gameType) => game.isPlaying === true);

    return (
        <GameCollection gameList={now_playing_games} title={'Now Playing'} />
    )
}

export default NowPlayingGames;