import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { create } from "zustand";


export type gameType = {
    id: number,
    name: string,
    platform: string,
    isPlaying: boolean,
    isFavorite: boolean,
    completion: 'unfinished' | 'complete' | 'mastered',
    rating: number,
    background: string,
    date?: string
}

type platformDataType = { label: string, shortLabel: string, icon: JSX.Element };

type gameStore = {
    games: gameType[] | [],
    addGame: (game: gameType) => void,
    updateGame: (game: gameType) => void,
    deleteGame: (id: number) => void,
    getPlatformData: (platform: string) => platformDataType
}

const gamePlatformData: { [key: string]: platformDataType } = {
    'nsw': { 'label': 'Nintendo Switch', 'shortLabel': 'Switch', 'icon': <SiNintendoswitch /> },
    'steam': { 'label': 'Steam', 'shortLabel': 'Steam', 'icon': <FaSteamSquare /> },
    'ps5': { 'label': 'PlayStation 5', 'shortLabel': 'PS5', 'icon': <FaPlaystation /> },
}

const useGameStore = create<gameStore>()((set) => ({
    games: JSON.parse(localStorage.getItem('BackloggerGames') || '[]'),
    addGame: (game) => set((state) => {
        let games = [...state.games];
        games.push(game);
        localStorage.setItem('BackloggerGames', JSON.stringify(games));
        return { games: games };
    }),
    updateGame: (game) => set((state) => {
        let games_ = [...state.games];
        const game_index = games_.findIndex((g: gameType) => g.id === game.id);
        if (game_index !== -1) {
            games_[game_index] = { ...game };
        }
        localStorage.setItem('BackloggerGames', JSON.stringify(games_));
        return { games: [...games_] };
    }),
    deleteGame: (id) => set((state) => {
        let games = [...state.games];
        games = games.filter((game: gameType) => game.id !== id);
        localStorage.setItem('BackloggerGames', JSON.stringify(games));
        return { games: games };
    }),
    getPlatformData: (platform) => {
        return gamePlatformData[platform];
    }
}))

export default useGameStore;