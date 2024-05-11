import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startLevel, setStartLevel] = useState(false); // Init level(unshowModal, spinDragonBall, showScore )
  const [score, setScore] = useState(0); // Init Score
  const handleNewLevel = () => {
    setStartLevel(true);
  };

  const handleCard = (affiliation, name) => {
    if (
      affiliation === "Villain" ||
      (affiliation === "Army of Frieza" && name !== "Freezer") ||
      affiliation === "Freelancer" ||
      affiliation === "Pride Troopers" ||
      affiliation === "Pride Troopers"
    ) {
      setScore((prevState) => prevState - 300);
    } else if (name === "Freezer") {
      setScore((prevState) => prevState - 1000);
    } else if (name === "Bulma") {
      setScore((prevState) => prevState + 1000);
    } else {
      setScore((prevState) => prevState + 300);
    }
  };

  return (
    <GameContext.Provider
      value={{ handleNewLevel, handleCard, score, startLevel }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
