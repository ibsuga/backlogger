import { useContext } from 'react';
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data';
import Card from '../Card/Card';
import Section from '../Section/Section';
import './CardCollection.css';


const CardCollection = (props: {
    gameList: gameType[],

}) => {
    const gameDataCtx = useContext(GameDataContext);

    let filtered_games;
    if (gameDataCtx.platformFilter === '') {
        filtered_games = [...props.gameList]
    } else {
        filtered_games = props.gameList.filter((game: gameType) => game.platform === gameDataCtx.platformFilter);
    }

    return (
        <Section>
            <div className='CardCollection'>
                {filtered_games.map((game, index) =>
                    <Card
                        key={index}
                        game={game}
                    />
                )}
            </div>
        </Section>
    )
}

export default CardCollection;