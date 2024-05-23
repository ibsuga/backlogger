import './GameCollection.css';
import { MdWebStories, MdFormatListBulleted } from "react-icons/md";
import { useContext, useState } from 'react';
import { GameDataContext } from '../../App';

import Game from '../Game/Game';
import Section from '../Section/Section';
import { gameType } from '../../stores/useGameStore';
import GameReleaseCard from '../GameReleaseCard/GameReleaseCard';


const GameCollection = (props: {
    gameList: gameType[] | [],
    title: string,
    disableScroll?: boolean
}) => {
    const [listDisplay, setListDisplay] = useState(false);
    const gameDataCtx = useContext(GameDataContext);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let filtered_games;
    if (gameDataCtx.platformFilter === '') {
        filtered_games = [...props.gameList]
    } else {
        filtered_games = props.gameList.filter((game: gameType) => game.platform === gameDataCtx.platformFilter);
    }

    return (
        <Section
            title={props.title}
            tools={[
                <button className='list-display-button' onClick={() => setListDisplay(!listDisplay)}>
                    {listDisplay ? <MdWebStories /> : <MdFormatListBulleted />}
                </button>,
            ]}
        >
            <div className={`GameCollection ${props.disableScroll ? 'no-scroll' : ''}`}>
                {filtered_games.map((game, index) => {
                    if (game.date) {
                        let game_date = new Date(game.date);

                        if (game_date > today) {
                            return <GameReleaseCard game={game} />
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