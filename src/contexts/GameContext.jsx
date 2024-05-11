import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startLevel, setStartLevel] = useState(false); // Init level(unshowModal, spinDragonBall, showScore )
  const [score, setScore] = useState(0); // Init Score
  const handleNewLevel = () => {
    setStartLevel(true);
  };

  const handleCard = () => {
    setScore((prevState) => prevState + 1000);
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
