import { useState } from "react";
import GameRatingStar from "./GameRatingStar";


const GameRatingSelector = (props: {
    rating: number,
    handleUpdateRating: (rating: number) => void
}) => {
    const [hoveredRating, setHoveredRating] = useState(-1);

    const getStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <GameRatingStar
                    key={i}
                    value={i}
                    rating={props.rating}
                    hoveredRating={hoveredRating}
                    setRating={props.handleUpdateRating}
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