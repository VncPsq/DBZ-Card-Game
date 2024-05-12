import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [startLevel, setStartLevel] = useState(false); // Init level(unshowModal, spinDragonBall, showScore )
  const [score, setScore] = useState(0); // Init Score
  const [level, setLevel] = useState(1); // Init Level
  const [dragonBalls, setDragonBalls] = useState(7); // Init DragonBalls
  const [resetCards, setResetCards] = useState(false); // Reset flipped cards
  const [disableGoku, setDisableGoku] = useState(false); // Block Click on Goku
  const [resumePick, setResumePick] = useState("Touch Goku to start"); // Indication H2 Game
  const [gameOver, setGameOver] = useState(false); //  GameOver

  const handleNewLevel = () => {
    if (dragonBalls !== 0) {
      setStartLevel(true);
      setResetCards(false);
      setResumePick("Find Bulma Goku !");
    } else {
      setStartLevel(false);
      setResumePick("Touch Goku to start a new Game");
      setScore(0);
      setDragonBalls(7);
      setGameOver(false);
      setLevel(1);
    }
  }; // Init movement DragonBall and UnshowModal and Level Number and force return BackCard

  const handleCard = (affiliation, name) => {
    setResumePick(
      `You found ${name} ${
        name === "Freezer" && dragonBalls === 1 ? "| Game Over" : ""
      } !`
    );
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
      if (dragonBalls === 1) {
        setGameOver(true);
      }
      setDisableGoku(true);

      setTimeout(() => {
        setResetCards(true);
        setDisableGoku(false);
      }, 2000);
    } else if (name === "Bulma") {
      setScore((prevState) => prevState + 500);
      setLevel((prevState) => prevState + 1);
      setStartLevel(false);
      setDisableGoku(true);

      setTimeout(() => {
        setResetCards(true);
        setDisableGoku(false);
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
        disableGoku,
        resumePick,
        gameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.object,
};

export const useGame = () => useContext(GameContext);
