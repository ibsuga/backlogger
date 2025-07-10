import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useActivityStore from "../../stores/useActivityStore";
import useGameStore, { gameType } from "../../stores/useGameStore";
import GameRatingSelector from "../Game/GameRatingSelector";
import GameDialogChallenges from "./Components/GameDialogChallenges";
import GameDialogStats from "./Components/GameDialogStats";
import GameStatusSelector from "./Components/GameStatusSelector";
import "./GameDialog.css";

import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdSave } from "react-icons/md";


const GameDialog = () => {
  const [isGameEditable, setIsGameEditable] = useState(false);  

  const [gameName, setGameName] = useState("");
  const [gameDeveloper, setGameDeveloper] = useState("");
  
  const [gameDialogId, setGameDialogId, games, updateGame] = useGameStore((state) => [state.gameDialogId, state.setGameDialogId, state.games, state.updateGame]);
  const addActivity = useActivityStore((state) => state.addActivity)

  const gameData: gameType | null = useMemo(() => {
    if (gameDialogId) {
      const game_index = games.findIndex((g: gameType) => g.id === gameDialogId);
        if (game_index !== -1) {
          return games[game_index];
        }
    } 
    return null;
  }, [gameDialogId, games])

  const background_gradient = useMemo(() => {
    const gradient_color = gameData ? `var(--platform-${gameData.platform})` : 'hsl(0, 0%, 10%)';
    return `linear-gradient(95deg, hsl(0, 0.00%, 15%) 0%, hsl(0, 0.00%, 15%) 32%, ${gradient_color} 32%, ${gradient_color} 100%)`;
  }, [gameData]);

  // This useEffect is used to preload state data when opening.
  useEffect(() => {
    if (gameData) {
      if (gameName == "") setGameName(gameData.name);
      if (gameDeveloper == "") setGameDeveloper(gameData.developer ?? "");
    }
  }, [gameData])

  // This useEffect is used to clean up dialog data when closing.
  useEffect(() => {
    if (!gameDialogId) {
      setIsGameEditable(false);
      setGameName("");
      setGameDeveloper("");
    }
  }, [gameDialogId]);


  const handleUpdateGame = () => {
    setIsGameEditable(false);
    if (gameData) {
      const game = { 
        ...gameData, 
        "name": gameName ,
        "developer": gameDeveloper,
      }
      updateGame(game);
    }
  }

  const handleUpdateRating = (rating: number) => {
    if (gameData) {
      const game = {
          ...gameData,
          'rating': rating
      }
      addActivity('rating', game.name, game.background, game.rating + 1);
      updateGame(game);
    }
  }

  return (
    <AnimatePresence>
    { gameDialogId && gameData &&
      <div className="GameDialog">
        <motion.div
          className="GameDialog__dialog" 
          onClick={(e) => e.stopPropagation()}
          initial={{opacity: 0, x: "40px"}}
          animate={{opacity: 1, x: "0", transition: {duration: 0.35, type: "tween", ease: "easeOut" }}}
          exit={{opacity: 0, x: "-40px"}}
        >
          <div className="GameDialog__background">
            <div className="GameDialog__background--image" style={{ backgroundImage: `url(${gameData.background})` }} />
            <div className="GameDialog__background--gradient" style={{ background: `${background_gradient}` }} />
          </div>
          <div className="GameDialog__content">
            <div className="GameDialog__sidebar">
              <div className="GameDialog__cover" style={{ backgroundImage: `url(${gameData.background})` }} />
              <div>
                <GameRatingSelector rating={gameData.rating} handleUpdateRating={handleUpdateRating} />
              </div>
              <GameDialogStats />
              <GameStatusSelector />
            </div>
            <div className="GameDialog__body">
              <div className="GameDialog__body_top">
                <div className="GameDialog__title">
                  <input 
                    onChange={(e) => setGameName(e.target.value)}
                    value={gameName} 
                    disabled={!isGameEditable}
                  />
                  {
                    isGameEditable 
                    ? <button onClick={handleUpdateGame}><MdSave /></button>
                    : <button onClick={() => setIsGameEditable(true)}><MdEdit /></button>
                  }
                  <button onClick={() => setGameDialogId()}><MdClose /></button>
                </div>
                <div className="GameDialog__info">
                  <div>{gameData.platform}</div>·
                  <input 
                    onChange={(e) => setGameDeveloper(e.target.value)}
                    value={gameDeveloper}
                    placeholder="Developer"
                    disabled={!isGameEditable}
                  />
                </div>
                <div className="GameDialog__tags">
                  <div>TAGS</div>
                </div>
              </div>
              <div className="GameDialog__body_bottom">
                <div className="GameDialog__header">
                  <div>CHALLENGES</div>
                  <div>ALBUM</div>
                  <div>LOG</div>
                </div>
                <GameDialogChallenges platform={gameData.platform} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="GameDialog__backdrop" 
          onClick={() => setGameDialogId()} 
          initial={{opacity: 0, x: "-100vw"}}
          animate={{opacity: 1, x: "0", transition: {duration: 0.25, type: "tween", ease: "easeOut" }}}
          exit={{opacity: 0}}
        />
      </div>
   }
   </AnimatePresence>
  )
}

export default GameDialog;