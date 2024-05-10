import { useState, useEffect, createContext, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [isLoadingApi, setIsLoadingApi] = useState(true);
  const [gokuTransfo, setGokuTransfo] = useState([]);
  const [isLoadingGoku, setIsLoadingGoku] = useState(true);
  const [shuffle, setShuffle] = useState([]);

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
        const characters = items.items;
        const bulma = characters.filter(
          (character) => character.name === "Bulma"
        );
        const freezer = characters.filter(
          (character) => character.name === "Freezer"
        );
        setCharacters(characters);
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

  return (
    <ApiContext.Provider
      value={{ characters, isLoadingApi, isLoadingGoku, gokuTransfo }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
