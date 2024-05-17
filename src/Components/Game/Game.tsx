import useGameStore from '../../stores/useGameStore';
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { IoTrophyOutline, IoTrophySharp } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { gameType } from '../../data/game_data'
import GameCard from '../GameCard/GameCard';
import './Game.css'
import GameSmall from '../GameSmall/GameSmall';
import useActivityStore from '../../stores/useActivityStore';


type GameDataType = { [key: string]: { 'label': string, 'icon': JSX.Element, 'shortLabel': string } };

const Game = (props: {
    game: gameType,
    listDisplay: boolean
}) => {
    const updateGame = useGameStore((state) => state.updateGame)
    const addActivity = useActivityStore((state) => state.addActivity)

    //Favorite toggler
    const handleToggleFavorite = () => {
        const game = {
            ...props.game,
            'isFavorite': !props.game.isFavorite
        }
        addActivity(game.isFavorite ? `Added ${game.name} to favorites` : `Removed ${game.name} from favorites`);
        updateGame(game);
    }

    const handleUpdateRating = (rating: number) => {
        const game = {
            ...props.game,
            'rating': rating
        }
        addActivity(`Gave ${game.name} a rating of ${rating + 1} stars.`);
        updateGame(game);
    }

    //Sets the platform logo and label, based on the selected platform on game creation.
    const GameData: GameDataType = {
        'nsw': { 'label': 'Nintendo Switch', 'shortLabel': 'Switch', 'icon': <SiNintendoswitch /> },
        'steam': { 'label': 'Steam', 'shortLabel': 'Steam', 'icon': <FaSteamSquare /> },
        'ps5': { 'label': 'PlayStation 5', 'shortLabel': 'PS5', 'icon': <FaPlaystation /> },
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
        addActivity(game.isPlaying ? `Started playing ${game.name}` : `Stopped playing ${game.name}`)
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
            addActivity(`You completed ${game.name}.`, game.background)
        } else if (game.completion === 'mastered') {
            addActivity(`You mastered ${game.name}.`, game.background)
        }
        updateGame(game);
    }

    if (props.listDisplay) {
        return (
            <GameSmall
                game={props.game}
                gameCompletionIcon={completionIcon[props.game.completion]}
                gamePlatform={GameData[props.game.platform]}
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
                gamePlatform={GameData[props.game.platform]}
                handleUpdateRating={handleUpdateRating}
                handleToggleCompletion={handleToggleCompletion}
                handleTogglePlayingStatus={handleTogglePlayingStatus}
                handleToggleFavorite={handleToggleFavorite}
            />
        )
    }
}

export default Game;