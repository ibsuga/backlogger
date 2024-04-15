//tests
export type gameType = {
    id: number,
    name: string,
    platform: string,
    status: 'to-play' | 'complete' | 'mastered',
    favorite: boolean,
    completion: string,
    rating: number
}

