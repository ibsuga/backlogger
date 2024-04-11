import './NavBar.css'
import CreateGameButton from '../CreateGameButton/CreateGameButton';
import { CgProfile } from "react-icons/cg";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoPlaystation } from "react-icons/io";
import { FaSteam } from "react-icons/fa";

const NavBar = (props: {
    setPage: (page: string) => void;

}) => {
    return (
        <div className='NavBar'>
            <div className='navbar-top'>
                <div className='logo' onClick={() => props.setPage('home')}>BACKLOGGER</div>
                <CreateGameButton />
            </div>
            <div className='navbar-bottom'>
                <div className='buttons-bar'>
                    <CgProfile onClick={() => props.setPage('profile')} />
                    <BsNintendoSwitch />
                    <IoLogoPlaystation />
                    <FaSteam />
                </div>
            </div>
        </div>
    )

}

export default NavBar;