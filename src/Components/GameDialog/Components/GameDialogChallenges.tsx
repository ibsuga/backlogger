import { IoTrophySharp } from "react-icons/io5";
import { IoMdCamera } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import "./GameDialogChallenges.css";


const GameDialogChallenges = () => {
  const test_challenges = [
    { type: "basic", description: "Finished playthrough", completed: false },
    { type: "basic", description: "Completed the compendium", completed: false },
  ]



  return (
    <div className="GameDialogChallenges">
      <div>
      {
        test_challenges.map((challenge) => (
          <div className="GameDialogChallenges__challenge">
            <div className="GameDialogChallenges__challenge_type"><IoTrophySharp /></div>
            <div>{challenge.description}</div>
            <div className="GameDialogChallenges__challenge_screenshot"><IoMdCamera /></div>
            <div>14/07/2025</div>
            <div className="GameDialogChallenges__challenge_status"><FaRegCheckCircle /></div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default GameDialogChallenges;