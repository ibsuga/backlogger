import { useState } from 'react';
import { createPortal } from 'react-dom';
import GameDialog from '../GameDialog/GameDialog';
import './CreateGameButton.css';


const CreateGameButton = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
          <button className='CreateGameButton' onClick={() => setDialogOpen(!dialogOpen)}>
              <span>Add Game</span>
          </button>
          {
            dialogOpen && createPortal(
              <GameDialog handleClose={() => setDialogOpen(false)} />, document.body
            )
          }
        </>
    )
}

export default CreateGameButton;