import { useApi } from "../../contexts/ApiContext";
import { useGame } from "../../contexts/GameContext";
import easterEgg from "../../assets/eaterEgg/Kamehameha.mp3";
import ball1 from "../../assets/img/dragonballs/ball1.png";
import ball2 from "../../assets/img/dragonballs/ball2.png";
import ball3 from "../../assets/img/dragonballs/ball3.png";
import ball4 from "../../assets/img/dragonballs/ball4.png";
import ball5 from "../../assets/img/dragonballs/ball5.png";
import ball6 from "../../assets/img/dragonballs/ball6.png";
import ball7 from "../../assets/img/dragonballs/ball7.png";
import turtleMaster from "../../assets/img/tortueGeniale.png";
import goku from "../../assets/img/goku_normal.webp";

function ScoreBoard() {
  const { gokuTransfo, handleShuffle } = useApi();
  const {
    handleNewLevel,
    startLevel,
    score,
    dragonBalls,
    level,
    disableGoku,
    gameOver,
  } = useGame();
  let audio = new Audio(easterEgg);

  const handleEasterEgg = () => {
    audio.play();
  };

  const handleStarGame = () => {
    handleNewLevel(); // Game Context
    handleShuffle(); // API Context
  };

  return (
    <article>
      <section className="scoreboard">
        <article
          className="dragonBalls"
          style={
            startLevel === true
              ? { animation: "dragonBalls-spin infinite 30s linear" }
              : { animation: "none" }
          }
        >
          <div hidden={dragonBalls > 0 ? false : true}>
            <img src={ball1} alt="DragonBall *" />
          </div>
          <div hidden={dragonBalls > 1 ? false : true}>
            <img src={ball2} alt="DragonBall **" />
          </div>
          <div hidden={dragonBalls > 2 ? false : true}>
            <img src={ball3} alt="DragonBall ***" />
          </div>
          <div hidden={dragonBalls > 3 ? false : true}>
            <img src={ball4} alt="DragonBall ****" />
          </div>
          <div hidden={dragonBalls > 4 ? false : true}>
            <img src={ball5} alt="DragonBall *****" />
          </div>
          <div hidden={dragonBalls > 5 ? false : true}>
            <img src={ball6} alt="DragonBall ******" />
          </div>
          <div hidden={dragonBalls > 6 ? false : true}>
            <img src={ball7} alt="DragonBall *******" />
          </div>
          <div className="turtleMaster">
            <img
              src={turtleMaster}
              onClick={handleEasterEgg}
              alt="Turtle master"
            />
          </div>
        </article>
        {(startLevel || gameOver) && (
          <article className="score">
            <h3>Score : {score}</h3>
            <p>Level {level}</p>
          </article>
        )}
        <article className="wrapperAvatar">
          <img
            style={
              disableGoku === true
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
            className="avatar"
            onClick={handleStarGame}
            src={
              score < 2000
                ? goku
                : score >= 2000 && score < 3000
                ? gokuTransfo[0].image
                : score >= 3000 && score < 4000
                ? gokuTransfo[1].image
                : score >= 4000 && score < 5000
                ? gokuTransfo[2].image
                : score >= 5000 && score < 6000
                ? gokuTransfo[3].image
                : score >= 6000 && score < 7000
                ? gokuTransfo[4].image
                : gokuTransfo[5].image
            }
            alt="Goku"
          />
        </article>
      </section>
    </article>
  );
}

export default ScoreBoard;
