import './GameCollection.css';
import { MdWebStories, MdFormatListBulleted } from "react-icons/md";
import { useContext, useState } from 'react';
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data';
import Game from '../Game/Game';
import Section from '../Section/Section';


const GameCollection = (props: {
    gameList: gameType[],
    title: string,
    disableScroll?: boolean
}) => {
    const [listDisplay, setListDisplay] = useState(false);
    const gameDataCtx = useContext(GameDataContext);

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
                {filtered_games.map((game, index) => <Game key={index} game={game} listDisplay={listDisplay} />)}
            </div>
        </Section>
    )
}

export default GameCollection;