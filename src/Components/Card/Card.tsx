import './Card.css'

const Card = (props: {
    name: string
}) => {
    return (
        <div className='Card'>{props.name}</div>
    )
}

export default Card;