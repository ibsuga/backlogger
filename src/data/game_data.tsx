//tests
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
