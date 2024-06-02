// import Section from '../Section/Section';
import { useContext } from 'react';
import useGameStore, { gameType } from '../../stores/useGameStore';
import { GameDataContext } from '../../App';
import { GiLaurelsTrophy } from "react-icons/gi";
import { IoTrophySharp } from "react-icons/io5";
import './CompletedGames.css';

import { Tooltip } from 'primereact/tooltip';

const CompletedGames = () => {
    const [games] = useGameStore((state) => [state.games]);
    const gameDataCtx = useContext(GameDataContext);

    //Filters games by platform if there is one selected
    let filtered_games;
    if (gameDataCtx.platformFilter === '') {
        filtered_games = [...games]
    } else {
        filtered_games = games.filter((game: gameType) => game.platform === gameDataCtx.platformFilter);
    }
    //games filtered by status = 'complete'
    let completed_games = filtered_games.filter((game: gameType) => game.completion === 'complete' || game.completion === 'mastered');
    //Games filtered by status = 'mastered'
    let mastered_games = filtered_games.filter((game: gameType) => game.completion === 'mastered');

    return (
        <div>
            <div className="CompletedGames">
                <div className='completed'>
                    <Tooltip target='.completed-icon' showDelay={500} />
                    <IoTrophySharp
                        className='completed-icon'
                        data-pr-tooltip='Completed Games'
                        data-pr-position='bottom'
                    />
                    <div>{completed_games.length}</div>
                </div>
                <div className='mastered'>
                    <Tooltip target='.mastered-icon' showDelay={500} />
                    <GiLaurelsTrophy
                        className='mastered-icon'
                        data-pr-tooltip='Mastered Games'
                        data-pr-position='bottom'
                    />
                    <div>{mastered_games.length}</div>
                </div>
            </div>

        </div>


    )
}

export default CompletedGames;