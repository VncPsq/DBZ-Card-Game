import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startGame, setStartGame] = useState(false);
  const [spinDragonBall, setSpinDragonBall] = useState(false);

  const handleModal = () => {
    setStartGame(!startGame);
    setSpinDragonBall(true);
  };

  return (
    <GameContext.Provider value={{ startGame, handleModal, spinDragonBall }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
