import { useState, useEffect, createContext, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
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
    <ApiContext.Provider value={{ characters, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
