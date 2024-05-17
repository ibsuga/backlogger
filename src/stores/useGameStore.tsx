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

type gameStore = {
    games: gameType[] | [],
    addGame: (game: gameType) => void,
    updateGame: (game: gameType) => void,
    deleteGame: (id: number) => void,
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
}))

export default useGameStore;