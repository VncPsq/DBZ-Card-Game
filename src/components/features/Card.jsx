import { useState } from "react";
import { useGame } from "../../contexts/GameContext";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from "react-card-flip";

function Card({ character }) {
  const { resetCards } = useGame();
  const [isFlipped, setIsFlipped] = useState(false); // Init the flipping back to front
  console.log(`${character.name} est retourné : ${isFlipped}`);

  return (
    <ReactCardFlip
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
      isFlipped={resetCards ? true : isFlipped}
      flipDirection="horizontal"
    >
      <BackCard character={character} setIsFlipped={setIsFlipped} />
      <FrontCard character={character} />
    </ReactCardFlip>
  );
}

export default Card;
