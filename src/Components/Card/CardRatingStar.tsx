import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";


const CardRatingStar = (props: {
    value: number,
    rating: number,
    hoveredRating: number,
    setRating: (value: number) => void,
    setHoveredRating: (value: number) => void,
}) => {

    const getIcon = () => {
        const rating = props.hoveredRating !== -1 ? props.hoveredRating : props.rating;
        if (rating < props.value) {
            if (rating === (props.value - 0.5)) {
                return <FaStarHalfAlt className="half-star" />
            } else {
                return <FaRegStar className="empty-star" />
            }
        } else {
            return <FaStar className="full-star" />
        }
    }

    let isHovered = false;
    if (props.hoveredRating !== -1) {
        if (props.hoveredRating >= props.value || props.hoveredRating === props.value - 0.5) {
            isHovered = true;
        }
    }

    const handleClick = (event: any) => {
        let element = event.target.getBoundingClientRect();
        let mouse_x = event.clientX - element.left;

        if (mouse_x < element.width / 2) {
            props.setRating(props.value - 0.5);
        } else {
            props.setRating(props.value);
        }
    }

    const handleHover = (event: any) => {
        let element = event.target.getBoundingClientRect();
        let mouse_x = event.clientX - element.left;

        if (mouse_x < element.width / 2) {
            props.setHoveredRating(props.value - 0.5);
        } else {
            props.setHoveredRating(props.value);
        }
    }

    return (
        <div className={`CardRatingStar ${isHovered ? 'hovered' : ''}`} onClick={handleClick} onMouseMove={handleHover}>
            {getIcon()}
        </div>
    )
}

export default CardRatingStar;
