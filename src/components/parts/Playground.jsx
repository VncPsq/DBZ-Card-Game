import { useState, useEffect } from "react";
import Card from "../features/Card";

function Playground() {
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

  return (
    <>
      {!isLoading ? (
        characters.map((character) => (
          <Card
            key={`Card ${character.id} | ${character.name}`}
            character={character}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Playground;
