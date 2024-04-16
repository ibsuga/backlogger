import Section from '../Section/Section';
import { useContext } from 'react';
import { GameDataContext } from '../../App';
import { gameType } from '../../data/game_data';
import { GiLaurelsTrophy } from "react-icons/gi";
import { IoTrophySharp } from "react-icons/io5";
import './CompletedGames.css';

const CompletedGames = (props: {
    gameList: gameType[]
}) => {

    const gameDataCtx = useContext(GameDataContext);
    //Filters games by platform if there is one selected
    let filtered_games;
    if (gameDataCtx.platformFilter === '') {
        filtered_games = [...props.gameList]
    } else {
        filtered_games = props.gameList.filter((game: gameType) => game.platform === gameDataCtx.platformFilter);
    }
    //games filtered by status = 'complete'
    let completed_games = filtered_games.filter((game: gameType) => game.completion === 'complete' || game.completion === 'mastered');
    //Games filtered by status = 'mastered'
    let mastered_games = filtered_games.filter((game: gameType) => game.completion === 'mastered');

    return (
        <Section title={'Completed Games'}>
            <div className="CompletedGames">
                <div className='completed'>
                    <div>{completed_games.length}</div>
                    <IoTrophySharp />
                </div>
                <div className='mastered'>
                    <div>{mastered_games.length}</div>
                    <GiLaurelsTrophy />
                </div>

            </div>
        </Section>


    )
}

export default CompletedGames;