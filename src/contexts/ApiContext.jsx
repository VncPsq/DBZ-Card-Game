import { useState, useEffect, createContext, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gokuTransfo, setGokuTransfo] = useState([]);

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
        setCharacters(characters);
        setIsLoading(false);
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
        setIsLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ characters, isLoading, gokuTransfo }}>
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
