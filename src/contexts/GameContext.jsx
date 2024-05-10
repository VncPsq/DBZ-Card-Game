import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(!startGame);
  };

  return (
    <GameContext.Provider value={{ startGame, handleStartGame }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
