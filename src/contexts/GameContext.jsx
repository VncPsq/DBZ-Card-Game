import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startGame, setStartGame] = useState(false);
  const [spinDragonBall, setSpinDragonBall] = useState(false);

  const handleStartGame = () => {
    setStartGame(!startGame);
    setSpinDragonBall(true);
  };

  return (
    <GameContext.Provider
      value={{ startGame, handleStartGame, spinDragonBall }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
