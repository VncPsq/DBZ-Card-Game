import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startLevel, setStartLevel] = useState(false); // Init level(unshowModal, spinDragonBall, showScore )
  const [score, setScore] = useState(0); // Init Score
  const [level, setLevel] = useState(1); // Init Level
  const [dragonBalls, setDragonBalls] = useState(7); // Init DragonBalls
  const [resetCards, setResetCards] = useState(false); // Reset flipped cards

  const handleNewLevel = () => {
    setStartLevel(true);
    setResetCards(false);
  }; // Init movement DragonBall and UnshowModal and Level Number and force return BackCard

  const handleCard = (affiliation, name) => {
    if (
      affiliation === "Villain" ||
      (affiliation === "Army of Frieza" && name !== "Freezer") ||
      affiliation === "Freelancer" ||
      affiliation === "Pride Troopers"
    ) {
      setScore((prevState) => prevState - 300);
    } else if (name === "Freezer") {
      setScore((prevState) => prevState - 300);
      setDragonBalls((prevState) => prevState - 1);
      setStartLevel(false);
      setTimeout(() => {
        setResetCards(true);
      }, 2000);
    } else if (name === "Bulma") {
      setScore((prevState) => prevState + 500);
      setLevel((prevState) => prevState + 1);
      setStartLevel(false);
      setTimeout(() => {
        setResetCards(true);
      }, 2000);
    } else {
      setScore((prevState) => prevState + 500);
    }
  }; // Flip the card and handle infos character to set dynamic score

  return (
    <GameContext.Provider
      value={{
        handleNewLevel,
        handleCard,
        score,
        dragonBalls,
        startLevel,
        level,
        resetCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
