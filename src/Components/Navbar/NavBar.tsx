import './NavBar.css'

const NavBar = (props: {
    setPage: (page: string) => void;

}) => {
    return (
        <div className='NavBar'>
            <div className='logo' onClick={() => props.setPage('profile')}>BACKLOGGER</div>
            <input className='searchbar' type="text" placeholder='Search games...' />
        </div>
    )

}

export default NavBar;