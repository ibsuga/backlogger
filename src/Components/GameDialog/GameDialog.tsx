import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { MdClose, MdEdit, MdImage, MdSave } from "react-icons/md";
import useActivityStore from "../../stores/useActivityStore";
import useGameStore, { gameType } from "../../stores/useGameStore";
import GameRatingSelector from "../Game/GameRatingSelector";
import ImageLinker from "../ImageLinker/ImageLinker";
import GameDialogChallenges from "./Components/GameDialogChallenges";
import GameDialogStats from "./Components/GameDialogStats";
import GamePlatformSelector from "./Components/GamePlatformSelector";
import GameStatusSelector from "./Components/GameStatusSelector";
import "./GameDialog.css";


const GameDialog = (props: {
  gameData?: gameType,
  handleClose: () => void,
}) => {
  const [isGameEditable, setIsGameEditable] = useState(!props.gameData);
  const [displayImageLinker, setDisplayImageLinker] = useState(false);  

  const [gameId, setGameId] = useState(props.gameData?.id ?? null);
  const [gameName, setGameName] = useState(props.gameData?.name ?? "");
  const [gameCover, setGameCover] = useState(props.gameData?.background ?? "");
  const [gamePlatform, setGamePlatform] = useState(props.gameData?.platform ?? "");
  const [gameDeveloper, setGameDeveloper] = useState(props.gameData?.developer ?? "");
  
  const [addGame, updateGame, games] = useGameStore((state) => [state.addGame, state.updateGame, state.games]);
  const addActivity = useActivityStore((state) => state.addActivity)

  const background_gradient = useMemo(() => {
    const gradient_color = props.gameData ? `var(--platform-${gamePlatform})` : 'hsl(0, 0%, 10%)';
    return `linear-gradient(95deg, hsl(0, 0.00%, 15%) 0%, hsl(0, 0.00%, 15%) 32%, ${gradient_color} 32%, ${gradient_color} 100%)`;
  }, [gamePlatform]);

  const handleClose = () => {
      setIsGameEditable(false);
      setDisplayImageLinker(false);
      setGameId(null);
      setGameName("");
      setGameCover("");
      setGamePlatform("");
      setGameDeveloper("");
      props.handleClose();
  }

  const handleUpdateGame = () => {
    if (gameId) {
      // We update an existing game.
      const game = games.find((g) => g.id === gameId)!; // We use TS exclamation because we are sure the game exists in the store.

      updateGame({
        ...game,
        "name": gameName,
        "background": gameCover,
        "platform": gamePlatform,
        "developer": gameDeveloper,
      })
    } else {
      // We register a new game.
      const game_id = Date.now();

      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const game_date = `${year}-${month}-${day}`;

      addGame(game_id, gameName, gamePlatform, gameCover, game_date);
      addActivity('add', gameName, gameCover);
      setGameId(game_id);
    }

    setIsGameEditable(false);
    setDisplayImageLinker(false);
  }

  const handleUpdateRating = (rating: number) => {
    if (props.gameData) {
      const game = {
          ...props.gameData,
          'rating': rating
      }
      addActivity('rating', game.name, game.background, game.rating + 1);
      updateGame(game);
    }
  }

  return (
    <AnimatePresence>
    {  
      <div className="GameDialog">
        <motion.div
          className="GameDialog__dialog" 
          onClick={(e) => e.stopPropagation()}
          initial={{opacity: 0, x: "40px"}}
          animate={{opacity: 1, x: "0", transition: { duration: 0.35, type: "tween", ease: "easeOut" }}}
          exit={{opacity: 0, x: "-40px"}}
        >
          <div className="GameDialog__background">
            <div className="GameDialog__background--image" style={{ backgroundImage: `url(${gameCover})` }} />
            <div className="GameDialog__background--gradient" style={{ background: `${background_gradient}` }} />
          </div>
          <div className="GameDialog__content">
            <div className="GameDialog__sidebar">
              <div className="GameDialog__cover">
                <div className="GameDialog__cover--background" style={{ backgroundImage: `url(${gameCover})` }} />
                { isGameEditable && <div className="GameDialog__cover--editButton" onClick={() => setDisplayImageLinker(true)} ><MdImage /></div>}
              </div>
              <GameRatingSelector rating={props.gameData?.rating ?? 0} handleUpdateRating={handleUpdateRating} />
              <GameDialogStats />
              <GameStatusSelector status={"backlog"} />
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
                  <button onClick={handleClose}><MdClose /></button>
                </div>
                <div className="GameDialog__info">
                  <GamePlatformSelector value={gamePlatform} onChange={setGamePlatform} disabled={!isGameEditable} />
                  ·
                  <input 
                    onChange={(e) => setGameDeveloper(e.target.value)}
                    value={gameDeveloper}
                    placeholder="Developer"
                    disabled={!isGameEditable}
                  />
                </div>
                <div className="GameDialog__tags"></div>
              </div>
              <div className="GameDialog__body_bottom">
                <div className="GameDialog__header">
                  <div>CHALLENGES</div>
                  <div>ALBUM</div>
                  <div>LOG</div>
                </div>
                <GameDialogChallenges />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="GameDialog__backdrop" 
          onClick={handleClose} 
          initial={{opacity: 0, x: "-100vw"}}
          animate={{opacity: 1, x: "0", transition: {duration: 0.25, type: "tween", ease: "easeOut" }}}
          exit={{opacity: 0}}
        />
      </div>
   }
   { 
      displayImageLinker && 
      <ImageLinker 
        handleSubmit={setGameCover}
        handleClose={() => setDisplayImageLinker(false)} 
      />
   }
   </AnimatePresence>
  )
}

export default GameDialog;