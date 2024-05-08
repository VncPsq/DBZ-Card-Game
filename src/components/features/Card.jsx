import { useState } from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from "react-card-flip";

function Card({ character }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <BackCard character={character} flipCard={flipCard} />
      <FrontCard character={character}  />
    </ReactCardFlip>
  );
}

export default Card;
