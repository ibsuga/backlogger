import './NavBar.css'

const NavBar = (props: {
    setPage: (page: string) => void;

}) => {
    return (
        <div className='NavBar'>
            <div className='logo' onClick={() => props.setPage('profile')}>BACKLOGGER</div>
        </div>
    )

}

export default NavBar;