import { useState, useEffect, createContext, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [characters, setCharacters] = useState([]); // Get all Characters except Bulma and Freezer and Goku
  const [mandatoryCharacters, setMandatoryCharacters] = useState([]); // Get Bulma and Freezer
  const [isLoadingApi, setIsLoadingApi] = useState(true); 
  const [gokuTransfo, setGokuTransfo] = useState([]); // Get all Goku Transfo
  const [sortedCards, setSortedCards] = useState([
    {
      id: 1,
      name: "Goku",
      image: "https://dragonball-api.com/characters/goku_normal.webp",
    },
    {
      id: 2,
      name: "Vegeta",
      image: "https://dragonball-api.com/characters/vegeta_normal.webp",
    },
    {
      id: 3,
      name: "Piccolo",
      image: "https://dragonball-api.com/characters/picolo_normal.webp",
    },
    {
      id: 4,
      name: "Bulma",
      image: "https://dragonball-api.com/characters/bulma.webp",
    },
    {
      id: 5,
      name: "Freezer",
      image: "https://dragonball-api.com/characters/Freezer.webp",
    },
    {
      id: 6,
      name: "Zarbon",
      image: "https://dragonball-api.com/characters/zarbon.webp",
    },
    {
      id: 7,
      name: "Dodoria",
      image: "https://dragonball-api.com/characters/dodoria.webp",
    },
    {
      id: 8,
      name: "Ginyu",
      image: "https://dragonball-api.com/characters/ginyu.webp",
    },
  ]); // 8 sorted cards for the level

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
        const AllCharacters = items.items;
        const characters = AllCharacters.filter(
          (character) =>
            character.name !== "Goku" &&
            character.name !== "Bulma" &&
            character.name !== "Freezer"
        );
        const mandatoryCharacters = AllCharacters.filter(
          (character) =>
            character.name === "Bulma" || character.name === "Freezer"
        );
        setCharacters(characters);
        setMandatoryCharacters(mandatoryCharacters);
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
    let draw = characters.slice(0, 6).concat(mandatoryCharacters);
    setSortedCards(shuffleArray(draw));
  }; // Suffle Cards and suffle sortedCards + mandatory

  return (
    <ApiContext.Provider
      value={{
        sortedCards,
        isLoadingApi,
        gokuTransfo,
        handleShuffle,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
