import { useState } from "react";
import "./GameStatusSelector.css";
import { AnimatePresence, motion } from "motion/react";


const GameStatusSelector = (props: {
  status: string
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gameStates = [
    { id: "abandoned", description: "Unfinished, with no plans to return"},
    { id: "retired", description: "Finished playing a game with no end"},
    { id: "completed", description: "Finished a full playthrough"},
    { id: "shelved", description: "Paused and waiting to be resumed"},
    { id: "playing", description: "Currently being played"},
    { id: "backlog", description: "Awaiting to be started"},
  ]

  return (
    <div className="GameStatusSelector">
      <AnimatePresence>
        {
          isMenuOpen && 
          <motion.div
            className="GameStatusSelector__menu" 
            initial={{opacity: 0 }}
            animate={{opacity: 1, transition: {duration: 0.35, type: "tween", ease: "easeOut" }}}
            exit={{opacity: 0 }}
            >
              { gameStates.map((state, index) => 
                <motion.div 
                  className={`GameStatusSelector__status ${state.id} ${props.status === state.id ? "active": ""}`}
                  initial={{opacity: 0, y: "40px"}}
                  animate={{opacity: 1, y: "0", transition: {duration: 0.35, type: "tween", ease: "easeOut", delay: 0.3 - (index * 0.05) }}}
                  exit={{opacity: 0, y: "40px"}}
                >
                  {state.id}
                  <span>{state.description}</span>
                </motion.div>
              )}
            </motion.div>
        }
      </AnimatePresence>
      <div 
        className="GameStatusSelector__button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        PLAYING
      </div>
    </div>
  )
}

export default GameStatusSelector;