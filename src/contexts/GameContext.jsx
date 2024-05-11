import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startLevel, setStartLevel] = useState(false); // Init level(unshowModal, spinDragonBall, showScore )

  const handleNewLevel = () => {
    setStartLevel(true);
  };

  return (
    <GameContext.Provider value={{ handleNewLevel, startLevel }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
