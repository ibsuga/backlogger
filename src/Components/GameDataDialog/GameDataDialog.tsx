import { useRef, useState, useEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";
import './GameDataDialog.css';

export type GameDataType = {
    name?: string,
    background?: string,
    platform?: string,
}

const GameDataDialog = (props: {
    btnElement: JSX.Element,
    dialogOpen: boolean,
    setDialogOpen: (value: boolean) => void,
    handleSubmit: (data: GameDataType) => void,
    defaultName?: string,
    defaultBackground?: string,
    defaultPlatform?: string,
}) => {
    const [name, setName] = useState(props.defaultName || '');
    const [background, setBackground] = useState(props.defaultBackground || '');
    const [platform, setPlatform] = useState(props.defaultPlatform || '-');
    const ref: any = useRef(null);

    useEffect(() => {
        if (props.dialogOpen) {
            ref.current?.showModal();
        } else {
            setName(props.defaultName || '');
            setBackground(props.defaultBackground || '');
            setPlatform(props.defaultPlatform || '-');
            ref.current?.close();
        }
    }, [props.dialogOpen]);

    const handleSubmitDialog = () => {
        let data: GameDataType = {};
        if (name != '') data.name = name;
        if (background != '') data.background = background;
        if (platform != '-') data.platform = platform;
        props.handleSubmit(data);
    }

    return (
        <>
            {props.btnElement}
            <dialog
                ref={ref}
                className="GameDataDialog"
            >
                <div className="dialog-content">
                    <FaWindowClose className='close-dialog' onClick={() => props.setDialogOpen(false)}>x</FaWindowClose>
                    <div>
                        <label>Game Title</label>
                        <input placeholder='Game you want to play...' type='text' value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <label>Platform</label>
                        <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                            <option hidden value="-">-</option>
                            <option value="steam">Steam</option>
                            <option value="nsw">Nintendo Switch</option>
                            <option value="ps5">PlayStation 5</option>
                        </select>
                    </div>
                    <div>
                        <label>Background</label>
                        <input placeholder='Insert a valid image URL' type="text" value={background} onChange={(event) => setBackground(event.target.value)} />
                    </div>
                    <button className='submit-game' onClick={handleSubmitDialog}>Submit Game</button>
                </div>
            </dialog>

        </>
    )
}

export default GameDataDialog;