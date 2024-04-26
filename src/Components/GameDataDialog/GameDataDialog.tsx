import { useRef, useState, useEffect } from 'react';
import './GameDataDialog.css';
import { Calendar } from 'primereact/calendar';
import { Nullable } from 'primereact/ts-helpers';
import 'primereact/resources/themes/nano/theme.css'
import { Dialog } from 'primereact/dialog';
import { FaSteamSquare } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoPlaystation } from "react-icons/io";


export type GameDataType = {
    name?: string,
    background?: string,
    platform?: string,
    date?: string,
}

const GameDataDialog = (props: {
    btnElement: JSX.Element,
    dialogOpen: boolean,
    setDialogOpen: (value: boolean) => void,
    handleSubmit: (data: GameDataType) => void,
    defaultName?: string,
    defaultBackground?: string,
    defaultPlatform?: string,
    defaultDate?: string,
}) => {
    const [name, setName] = useState(props.defaultName || '');
    const [background, setBackground] = useState(props.defaultBackground || '');
    const [platform, setPlatform] = useState(props.defaultPlatform || '-');
    const [date, setDate] = useState<Nullable<Date>>(props.defaultDate ? new Date(props.defaultDate) : null);



    const ref: any = useRef(null);

    useEffect(() => {
        if (props.dialogOpen) {
            ref.current?.showModal();
        } else {
            setName(props.defaultName || '');
            setBackground(props.defaultBackground || '');
            setPlatform(props.defaultPlatform || '-');
            setDate(props.defaultDate ? new Date(props.defaultDate) : null);
            ref.current?.close();
        }
    }, [props.dialogOpen]);

    const handleSubmitDialog = () => {
        let data: GameDataType = {};
        if (name != '') data.name = name;
        if (background != '') data.background = background;
        if (platform != '-') data.platform = platform;
        if (date) {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            data.date = `${year}-${month}-${day}`;
        }
        props.handleSubmit(data);
    }

    return (
        <>
            {props.btnElement}
            {/* <dialog
                ref={ref}
                className="GameDataDialog"
            > */}
            <Dialog className="GameDataDialog" visible={props.dialogOpen} style={{ width: '30vw' }} draggable={false} resizable={false} onHide={() => props.setDialogOpen(false)}>
                <div className="dialog-content">
                    <div>
                        <label>Game Title</label>
                        <input placeholder='Game you want to play...' type='text' value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <label>Background</label>
                        <input
                            placeholder='Insert a valid image URL'
                            type="text"
                            value={background}
                            onChange={(event) => setBackground(event.target.value)} />
                    </div>
                    <div>
                        <label>Platform</label>
                        <div className='dialog-platform'>
                            <input type="radio" id='steam' name='platform' onClick={() => setPlatform('steam')} />
                            <label htmlFor="steam"><FaSteamSquare /></label>

                            <input type="radio" id='nsw' name='platform' onClick={() => setPlatform('nsw')} />
                            <label htmlFor="nsw"><BsNintendoSwitch /></label>

                            <input type="radio" id='ps5' name='platform' onClick={() => setPlatform('ps5')} />
                            <label htmlFor="ps5"><IoLogoPlaystation /></label>
                        </div>
                    </div>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat='dd/mm/yy' />
                    <button className='submit-game' onClick={handleSubmitDialog}>Submit Game</button>
                </div>
            </Dialog>
            {/* </dialog> */}
        </>
    )
}

export default GameDataDialog;