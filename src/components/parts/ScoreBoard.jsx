import { useApi } from "../../contexts/ApiContext";
import { useGame } from "../../contexts/GameContext";

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
  const { gokuTransfo, isLoadingGoku, handleShuffle } = useApi();
  const { handleNewLevel, startLevel } = useGame();

  const handleStarGame = () => {
    handleNewLevel(); // Init movement DragonBall and UnshowModal
    handleShuffle(); // Suffle Cards in API Context
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
          <div>
            <img src={ball1} alt="DragonBall *" />
          </div>
          <div>
            <img src={ball2} alt="DragonBall **" />
          </div>
          <div>
            <img src={ball3} alt="DragonBall ***" />
          </div>
          <div>
            <img src={ball4} alt="DragonBall ****" />
          </div>
          <div>
            <img src={ball5} alt="DragonBall *****" />
          </div>
          <div>
            <img src={ball6} alt="DragonBall ******" />
          </div>
          <div>
            <img src={ball7} alt="DragonBall *******" />
          </div>
          <div className="turtleMaster">
            <img src={turtleMaster} alt="Turtle master" />
          </div>
        </article>
        {startLevel && (
          <article className="score">
            <h3>Score : 00000</h3>
            <p>Level 1</p>
          </article>
        )}
        <article className="wrapperAvatar">
          <img
            className="avatar"
            onClick={handleStarGame}
            src={isLoadingGoku ? goku : goku}
            alt="Goku"
          />
        </article>
      </section>
    </article>
  );
}

export default ScoreBoard;
