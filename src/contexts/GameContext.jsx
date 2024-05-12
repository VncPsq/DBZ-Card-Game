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

  const handleNewLevel = () => {
    if (dragonBalls !== 0) {
      setStartLevel(true);
      setResetCards(false);
    } else {
      alert(`Your Game is over, well done San Goku`);
      setScore(0);
      setDragonBalls(7);
      setLevel(1);
    }
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
      setDisableGoku(true);

      setTimeout(() => {
        setResetCards(true);
        setDisableGoku(false);
        alert(
          `Oh no you found Freezer !
          Retry this level, your score is ${score - 300}.
          You still have ${dragonBalls - 1} DragonBalls`
        );
      }, 2000);
    } else if (name === "Bulma") {
      setScore((prevState) => prevState + 500);
      setLevel((prevState) => prevState + 1);
      setStartLevel(false);
      setDisableGoku(true);
      setTimeout(() => {
        setResetCards(true);
        setDisableGoku(false);
        alert(
          `Well done you found Bulma !
          Let's go to the level ${level + 1}!
          Your score is ${score + 500}.
          You still have ${dragonBalls} DragonBalls `
        );
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
