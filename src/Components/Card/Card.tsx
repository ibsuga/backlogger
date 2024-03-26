import './Card.css'

const Card = (props: {
    name: string
    platform: string
    size: string
}) => {
    // className={`Card ${props.size}`}
    return (
        <div className={`Card ${props.size}`} >
            <div className='Title'>{props.name}</div>
            <div className='Content'>&nbsp;</div>
            <div className='Platform'>{props.platform}</div>
        </div>
    )
}

export default Card;