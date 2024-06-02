import './NavBar.css'
import CreateGameButton from '../CreateGameButton/CreateGameButton';
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoPlaystation } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import { MdOutlineVideogameAssetOff } from "react-icons/md";
import CompletedGames from '../CompletedGames/CompletedGames';
// import { CgProfile } from "react-icons/cg";

const NavBar = (props: {
    setPage: (page: string) => void;
    setPlatformFilter: (platform: string) => void;
    platformFilter: string;

}) => {


    return (
        <div className='NavBar'>
            <div className='navbar-top'>
                <div className='logo-container'>
                    <div className='logo' onClick={() => props.setPage('home')}>BACKLOGGER</div>
                </div>
                {/* <CgProfile className={'profile'} onClick={() => props.setPage('profile')} /> */}
                <CreateGameButton />
            </div>
            <div className='navbar-bottom'>
                <div className='buttons-bar'>
                    <MdOutlineVideogameAssetOff onClick={() => props.setPlatformFilter('')} />
                    <BsNintendoSwitch className={`nsw ${props.platformFilter === 'nsw' ? 'active' : ''}`} onClick={() => props.setPlatformFilter('nsw')} />
                    <IoLogoPlaystation className={`ps5 ${props.platformFilter === 'ps5' ? 'active' : ''}`} onClick={() => props.setPlatformFilter('ps5')} />
                    <FaSteam className={`steam ${props.platformFilter === 'steam' ? 'active' : ''}`} onClick={() => props.setPlatformFilter('steam')} />
                </div>
                <div className='stats-bar'>
                    <CompletedGames />
                </div>
            </div>
        </div>
    )

}

export default NavBar;