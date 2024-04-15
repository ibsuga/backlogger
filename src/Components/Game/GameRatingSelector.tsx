import { useState, useEffect } from "react";
import GameRatingStar from "./GameRatingStar";


const GameRatingSelector = (props: {
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
                <GameRatingStar
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
        <div className="GameRatingSelector" onMouseLeave={() => setHoveredRating(-1)}>
            {getStars()}
        </div>
    )
}



export default GameRatingSelector;