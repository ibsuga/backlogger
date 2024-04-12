import { useState, useEffect } from "react";
import CardRatingStar from "./CardRatingStar";


const CardRatingSelector = (props: {
    defaultRating: number,
    handleUpdateRating: (rating: number) => void
}) => {
    const [rating, setRating] = useState(props.defaultRating);
    const [hoveredRating, setHoveredRating] = useState(-1);

    useEffect(() => {
        props.handleUpdateRating(rating);
    }, [rating])

    const getStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <CardRatingStar
                    key={i}
                    value={i}
                    rating={rating}
                    hoveredRating={hoveredRating}
                    setRating={setRating}
                    setHoveredRating={setHoveredRating}
                />
            )
        }
        return stars;
    }

    return (
        <div className="CardRatingSelector" onMouseLeave={() => setHoveredRating(-1)}>
            {getStars()}
        </div>
    )
}



export default CardRatingSelector;