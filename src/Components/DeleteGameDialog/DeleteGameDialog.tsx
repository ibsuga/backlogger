import { ConfirmDialog } from 'primereact/confirmdialog';
import useGameStore, { gameType } from '../../stores/useGameStore';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';


const DeleteGameDialog = (props: {
    game: gameType,
}) => {
    const [visible, setVisible] = useState(false);
    const deleteGame = useGameStore((state) => state.deleteGame)

    //Delete the game.
    const accept = () => {
        deleteGame(props.game.id)
    }

    return (
        <>
            <ConfirmDialog
                message={`Are you sure you want to delete ${props.game.name} from your backlog?`}
                header={'Confirmation'}
                icon={'pi pi-exclamation-triangle'}
                defaultFocus={'accept'}
                visible={visible}
                accept={accept}
                onHide={() => setVisible(false)}
            />
            <ConfirmDialog />
            <button onClick={() => setVisible(true)} className="tool game-delete"><MdDelete /></button>
        </>
    )
}


export default DeleteGameDialog;