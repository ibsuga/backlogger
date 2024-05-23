import useGameStore, { gameType } from '../../stores/useGameStore';
import { IoTrophyOutline, IoTrophySharp } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import GameCard from '../GameCard/GameCard';
import './Game.css'
import GameSmall from '../GameSmall/GameSmall';
import useActivityStore from '../../stores/useActivityStore';


const Game = (props: {
    game: gameType,
    listDisplay: boolean

}) => {
    const [updateGame, getPlatformData] = useGameStore((state) => [state.updateGame, state.getPlatformData])
    const addActivity = useActivityStore((state) => state.addActivity)

    //Favorite toggler
    const handleToggleFavorite = () => {
        const game = {
            ...props.game,
            'isFavorite': !props.game.isFavorite
        }

        addActivity('favorite', game.name, game.background);
        updateGame(game);
    }

    const handleUpdateRating = (rating: number) => {
        const game = {
            ...props.game,
            'rating': rating
        }
        addActivity('rating', game.name, game.background, game.rating + 1);
        updateGame(game);
    }

    //Sets the status mark as a logo, based on the selected status state.
    const completionIcon: { [key: string]: JSX.Element } = {
        'unfinished': <IoTrophyOutline />,
        'complete': <IoTrophySharp />,
        'mastered': <GiLaurelsTrophy />,
    }

    const handleTogglePlayingStatus = () => {
        const game = {
            ...props.game,
            'isPlaying': !props.game.isPlaying,
        }
        addActivity(game.isPlaying ? 'playing' : 'stopped', game.name, game.background)
        updateGame(game);
    }

    const handleToggleCompletion = () => {
        let completion = props.game.completion

        if (completion === 'unfinished') {
            completion = 'complete'
        } else if (completion === 'complete') {
            completion = 'mastered'
        } else {
            completion = 'unfinished'
        }

        const game = {
            ...props.game,
            'completion': completion
        }

        if (game.completion === 'complete') {
            addActivity('complete', game.name, game.background)
        } else if (game.completion === 'mastered') {
            addActivity('mastered', game.name, game.background)
        }
        updateGame(game);
    }

    if (props.listDisplay) {
        return (
            <GameSmall
                game={props.game}
                gameCompletionIcon={completionIcon[props.game.completion]}
                gamePlatform={getPlatformData(props.game.platform)}
                handleUpdateRating={handleUpdateRating}
                handleToggleCompletion={handleToggleCompletion}
                handleTogglePlayingStatus={handleTogglePlayingStatus}
                handleToggleFavorite={handleToggleFavorite}
            />
        )
    } else {
        return (
            <GameCard
                game={props.game}
                gameCompletionIcon={completionIcon[props.game.completion]}
                gamePlatform={getPlatformData(props.game.platform)}
                handleUpdateRating={handleUpdateRating}
                handleToggleCompletion={handleToggleCompletion}
                handleTogglePlayingStatus={handleTogglePlayingStatus}
                handleToggleFavorite={handleToggleFavorite}
            />
        )
    }
}

export default Game;