import { useState, useEffect } from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import ReactCardFlip from "react-card-flip";

function Card() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=50")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((items) => {
        const characters = items.items;
        setCharacters(characters);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {!isLoading ? (
        characters.map((character) => (
          <ReactCardFlip
            flipSpeedBackToFront={0.3}
            flipSpeedFrontToBack={0.3}
            isFlipped={isFlipped}
            flipDirection="horizontal"
            key={`Card ${character.id} | ${character.name}`}
          >
            <BackCard character={character} flipCard={flipCard} />
            <FrontCard character={character} flipCard={flipCard} />
          </ReactCardFlip>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Card;
