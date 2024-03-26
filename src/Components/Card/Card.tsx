import './Card.css'

const Card = (props: {
    name: string
    platform: string
}) => {
    return (
        <div className='Card'>
            <div className='Title'>{props.name}</div>
            <div className='Content'>&nbsp;</div>
            <div className='Platform'>{props.platform}</div>
        </div>
    )
}

export default Card;