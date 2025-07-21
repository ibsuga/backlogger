import { FaPlaystation, FaSteamSquare } from "react-icons/fa";
import { SiNintendoswitch, SiRetroarch } from "react-icons/si";
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
    date?: string,
    developer?: string,
}

type platformDataType = { id: string, label: string, shortLabel: string, icon: JSX.Element };

type gameStore = {
    games: gameType[] | [],
    gameDialogId: number | null,
    addGame: (id: gameType["id"], name: gameType["name"], platform: gameType["platform"], background: gameType["background"], date: gameType["date"]) => void,
    updateGame: (game: gameType) => void,
    deleteGame: (id: number) => void,
    getPlatformData: (platform: string) => platformDataType,
    setGameDialogId: (id?: number) => void,
}

export const gamePlatforms: platformDataType[] = [
  { "id": "nsw", "label": "Nintendo Switch", "shortLabel": "Switch", "icon": <SiNintendoswitch /> },
  { "id": "steam", "label": "Steam", "shortLabel": "Steam", "icon": <FaSteamSquare /> },
  { "id": "ps5", "label": "Playstation 5", "shortLabel": "PS5", "icon": <FaPlaystation /> },
  { "id": "retro", "label": "Retro", "shortLabel": "Retro", "icon": <SiRetroarch /> },
]

const useGameStore = create<gameStore>()((set) => ({
    games: JSON.parse(localStorage.getItem('BackloggerGames') || '[]'),
    gameDialogId: null,
    addGame: (id, name, platform, background, date) => set((state) => {
        let games = [...state.games];
        games.push({
          id: id,
          name,
          platform,
          isPlaying: false,
          isFavorite: false,
          completion: 'unfinished',
          rating: -1,
          background,
          date
        });
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
        return gamePlatforms.find((p) => p.id === platform)!;
    },
    setGameDialogId: (id) => set(() => {
        return { gameDialogId: id }
    }),
}))

export default useGameStore;