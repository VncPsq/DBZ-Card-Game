import { useState } from "react";
import { useGame } from "../../contexts/GameContext";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from "react-card-flip";

function Card({ character }) {
  const { returnCards } = useGame();
  const [isFlipped, setIsFlipped] = useState(false); // Init the flipping back to front

  return (
    <ReactCardFlip
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
      isFlipped={returnCards === false ? returnCards : isFlipped}
      flipDirection="horizontal"
    >
      <BackCard character={character} setIsFlipped={setIsFlipped} />
      <FrontCard character={character} />
    </ReactCardFlip>
  );
}

export default Card;
