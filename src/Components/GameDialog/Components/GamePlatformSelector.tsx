import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { gamePlatforms } from "../../../stores/useGameStore";
import "./GamePlatformSelector.css";


const GamePlatformSelector = (props: {
  value: string,
  onChange: (platform: string) => void,
  disabled: boolean,
}) => {
  const [value, setValue] = useState(props.value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleClick = (id: string) => {
    setIsMenuOpen(false);
    setValue(id);
    props.onChange(id);
  }

  useEffect(() => setValue(props.value), [props.value])

  return (
    <div className="GamePlatformSelector" onClick={() => !props.disabled && setIsMenuOpen(!isMenuOpen)}>
      <div 
        className={`GamePlatformSelector__selector ${!props.disabled ? "active" : ""} ${!value ? "placeholder" : ""}`}
      >
        { value ? gamePlatforms.find((platform) => platform.id === value)?.label : "PLATFORM"}
      </div>
      <AnimatePresence>
          {
            isMenuOpen && 
            <motion.div
              className="GamePlatformSelector__menu" 
              initial={{opacity: 0 }}
              animate={{opacity: 1, transition: {duration: 0.35, type: "tween", ease: "easeOut" }}}
              exit={{opacity: 0 }}
              >
                {
                  gamePlatforms.map((platform) => 
                    <div onClick={() => handleClick(platform.id)}>{platform.label}</div>
                  )
                }
              </motion.div>
          }
        </AnimatePresence>
    </div>
  )
}

export default GamePlatformSelector;