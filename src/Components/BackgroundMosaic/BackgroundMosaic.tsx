import { useEffect, useMemo, useState } from "react";
import useGameStore from "../../stores/useGameStore";
import "./BackgroundMosaic.css"


const BackgroundMosaic = () => {
  const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });
  const games = useGameStore((state) => state.games);

  const game_covers = useMemo(() => {
    const covers = games.map((game) => game.background);
    const cover_grid_columns = Math.floor(window.innerHeight / (125 + 10)); // game height: 125px, flex gap: 10px
    const cover_grid_rows = Math.floor(window.innerWidth / (175 + 10)); // game width: 175px, flex gap: 10px
    const covers_amount = (cover_grid_columns + 4) * (cover_grid_rows + 4);

    const covers_randomized: string[] = new Array(covers_amount);
    for (let i = 0; i < covers_amount; i++) {
      covers_randomized[i] = covers[Math.floor(Math.random() * covers.length)]
    }
    return covers_randomized;
  }, [games, windowSize])

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize({ height: window.innerHeight, width: window.innerWidth }));
  }, [])

  return (
    <div className="BackgroundMosaic">
      <div className="BackgroundMosaic__mosaic">
      {
        game_covers.map((cover: string) => 
          <div className="BackgroundMosaic__game" style={{ background: `url(${cover})` }} />
        )
      }
      </div>
      <div className="BackgroundMosaic__overlay" />
    </div>
  )
}

export default BackgroundMosaic;