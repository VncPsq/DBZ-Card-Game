import { useState, useEffect, createContext, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [characters, setCharacters] = useState([]); // Get all Characters
  const [mandatoryCards, setMandatoryCards] = useState([]); // Get Bulma and Freezer
  const [isLoadingApi, setIsLoadingApi] = useState(true);
  const [gokuTransfo, setGokuTransfo] = useState([]); // Get all Goku Transfo
  const [isLoadingGoku, setIsLoadingGoku] = useState(true);
  const [sortedCards, setSortedCards] = useState([]); // 8 sorted cards for the level

  useEffect(() => {
    // Fetch all the characters
    fetch("https://dragonball-api.com/api/characters?limit=58")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((items) => {
        const characters = items.items.filter(
          (character) => character.name !== "Goku"
        );
        const mandatoryCards = characters.filter(
          (character) =>
            character.name === "Bulma" || character.name === "Freezer"
        );
        setCharacters(characters);
        setMandatoryCards(mandatoryCards);
        setIsLoadingApi(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

    // Fetch the Goku transformations
    fetch("https://dragonball-api.com/api/characters/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((items) => {
        const gokuTransfo = items.transformations;
        setGokuTransfo(gokuTransfo);
        setIsLoadingGoku(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  //Function to shuffle the characters
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } // Fisher-Yates Sorting Algorithm
    return array;
  }

  const handleShuffle = () => {
    shuffleArray(characters);
    setSortedCards(characters.slice(0, 8));
  }; // Active shuffleArray

  console.log(sortedCards);
  console.log(characters);

  return (
    <ApiContext.Provider
      value={{
        characters,
        isLoadingApi,
        isLoadingGoku,
        gokuTransfo,
        handleShuffle,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
