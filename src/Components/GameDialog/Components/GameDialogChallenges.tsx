import "./GameDialogChallenges.css";


const GameDialogChallenges = (props: {
  platform: string
}) => {
  const test_challenges = [
    { type: "basic", description: "Finished playthrough", completed: false },
    { type: "basic", description: "Completed the compendium", completed: false },
    { type: "basic", description: "All achievements", completed: false },
    { type: "basic", description: "Finished in less than 2h", completed: false },
    { type: "basic", description: "Got all moons!", completed: false },
    { type: "basic", description: "Finished playthrough", completed: false },
    { type: "basic", description: "Completed the compendium", completed: false },
    { type: "basic", description: "All achievements", completed: false },
    { type: "basic", description: "Finished in less than 2h", completed: false },
    { type: "basic", description: "Got all moons!", completed: false },
    { type: "basic", description: "Finished playthrough", completed: false },
    { type: "basic", description: "Completed the compendium", completed: false },
    { type: "basic", description: "All achievements", completed: false },
    { type: "basic", description: "Finished in less than 2h", completed: false },
    { type: "basic", description: "Got all moons!", completed: false },
    { type: "basic", description: "Finished playthrough", completed: false },
    { type: "basic", description: "Completed the compendium", completed: false },
    { type: "basic", description: "All achievements", completed: false },
    { type: "basic", description: "Finished in less than 2h", completed: false },
    { type: "basic", description: "Got all moons!", completed: false },
  ]



  return (
    <div className="GameDialogChallenges">
      <div>
      {
        test_challenges.map((challenge) => (
          <div className="GameDialogChallenges__challenge" style={{ backgroundColor: `var(--platform-${props.platform})`}}>
            <div>{challenge.type}</div>
            <div>{challenge.description}</div>
            <div>EDIT</div>
            <div>DELETE</div>
            <div>PICTURE</div>
            <div>DATE COMPLETED</div>
            <div>IN PROGRESS</div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default GameDialogChallenges;