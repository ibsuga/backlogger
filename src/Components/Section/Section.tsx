import './Section.css'
import { useContext } from 'react'
import { GameDataContext } from '../../App'


const Section = (props: {
    children: JSX.Element | JSX.Element[]
    title: string
}) => {

    const gameDataCtx = useContext(GameDataContext);

    return (
        <div className={`Section ${gameDataCtx.platformFilter}`}>
            <div className="section-title">
                <span>{props.title}</span>
                <div></div>
            </div>
            <div className='section-content'>
                {props.children}
            </div>
        </div>
    )
}

export default Section;