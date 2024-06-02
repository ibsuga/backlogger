import './GameCollection.css';
import { MdWebStories, MdFormatListBulleted, MdFavorite, MdOutlinePlayCircleOutline, MdLayersClear } from "react-icons/md";
import { IoTrophySharp } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { useContext, useState } from 'react';
import { GameDataContext } from '../../App';
import Game from '../Game/Game';
import Section from '../Section/Section';
import { gameType } from '../../stores/useGameStore';
import GameReleaseCard from '../GameReleaseCard/GameReleaseCard';
import GameReleaseSmall from '../GameReleaseSmall/GameReleaseSmall';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';



const GameCollection = (props: {
    gameList: gameType[] | [],
    title: string,
    disableScroll?: boolean
}) => {
    const [listDisplay, setListDisplay] = useState(false);
    const [filter, setFilter] = useState<string | null>(null);
    const [sorting, setSorting] = useState<string | null>(null);
    const gameDataCtx = useContext(GameDataContext);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    //Filters games by platform.
    let filtered_games;
    if (gameDataCtx.platformFilter === '') {
        filtered_games = [...props.gameList]
    } else {
        filtered_games = props.gameList.filter((game: gameType) => game.platform === gameDataCtx.platformFilter);
    }

    //Filters games by selected option.
    switch (filter) {
        case 'favorite':
            filtered_games = filtered_games.filter((game: gameType) => game.isFavorite);
            break;
        case 'now_playing':
            filtered_games = filtered_games.filter((game: gameType) => game.isPlaying);
            break;
        case 'completed':
            filtered_games = filtered_games.filter((game: gameType) => game.completion === 'complete');
            break;
        case 'mastered':
            filtered_games = filtered_games.filter((game: gameType) => game.completion === 'mastered');
            break;
    }

    const sorting_options = [
        { label: 'Sort alphabetically', value: 'alphabetical' },
        { label: 'Sort by rating', value: 'rating' },
        { label: 'Sort by release date', value: 'release_date' },
    ]

    switch (sorting) {
        case 'alphabetical':
            filtered_games.sort((game_a: gameType, game_b: gameType) => {
                if (game_a.name > game_b.name) return -1;
                if (game_a.name < game_b.name) return 1;
                return 0;
            });
            break;
        case 'rating':
            filtered_games.sort((game_a: gameType, game_b: gameType) => {
                let a = typeof game_a.rating !== 'number' ? -1 : game_a.rating;
                let b = typeof game_b.rating !== 'number' ? -1 : game_b.rating;
                return a - b;
            });
            break;
        case 'release_date':
            filtered_games.sort((a: gameType, b: gameType) => {
                const game_date_a = new Date(a.date!);
                const game_date_b = new Date(b.date!);
                return game_date_a.getTime() - game_date_b.getTime();
            })
            break;
    }
    //Targets for the tooltip to show
    const tooltip_targets = ['.btn_favorite', '.btn_playing', '.btn_complete', '.btn_mastered', '.btn_clear', '.btn_list'];

    return (
        <Section
            title={props.title}
            tools={[
                <Dropdown
                    className="filter-button spaced"
                    value={sorting}
                    options={sorting_options}
                    optionLabel='label'
                    onChange={(e) => setSorting(e.value)}
                    showClear
                    placeholder='Select sorting option'
                />,
                <Tooltip target={tooltip_targets} showDelay={500} position='bottom' />,
                <button
                    className={`filter-button btn_favorite ${filter === 'favorite' ? 'active' : null}`}
                    onClick={() => setFilter('favorite')}
                    data-pr-tooltip='Filter by Favorites'>
                    <MdFavorite />
                </button>,
                <button
                    className={`filter-button btn_playing ${filter === 'now_playing' ? 'active' : null}`}
                    onClick={() => setFilter('now_playing')}
                    data-pr-tooltip='Filter by Now Playing'>
                    <MdOutlinePlayCircleOutline />
                </button>,
                <button
                    className={`filter-button btn_complete ${filter === 'completed' ? 'active' : null}`}
                    onClick={() => setFilter('completed')}
                    data-pr-tooltip='Filter by Completed Games'>
                    < IoTrophySharp />
                </button>,
                <button
                    className={`filter-button btn_mastered ${filter === 'mastered' ? 'active' : null}`}
                    onClick={() => setFilter('mastered')}
                    data-pr-tooltip='Filter by Mastered Games'>
                    <GiLaurelsTrophy />
                </button>,
                <button className='filter-button btn_clear spaced'
                    onClick={() => setFilter(null)}
                    data-pr-tooltip='Clear Filter'>
                    <MdLayersClear />
                </button>,
                <button className='filter-button btn_list'
                    onClick={() => setListDisplay(!listDisplay)}
                    data-pr-tooltip={listDisplay ? 'Card display' : 'List display'}>
                    {listDisplay ? <MdWebStories /> : <MdFormatListBulleted />}
                </button>
            ]}
        >
            <div className={`GameCollection ${props.disableScroll ? 'no-scroll' : ''}`}>
                {filtered_games.map((game, index) => {
                    if (game.date) {
                        let game_date = new Date(game.date);

                        if (game_date > today) {
                            if (listDisplay) {
                                return <GameReleaseSmall game={game} />
                            } else {
                                return <GameReleaseCard game={game} />
                            }
                        } else {
                            return <Game key={index} game={game} listDisplay={listDisplay} />
                        }


                    }
                }
                ).reverse()}
            </div>
        </Section>
    )
}

export default GameCollection;