import ball1 from "../../assets/img/dragonballs/ball1.png";
import ball2 from "../../assets/img/dragonballs/ball2.png";
import ball3 from "../../assets/img/dragonballs/ball3.png";
import ball4 from "../../assets/img/dragonballs/ball4.png";
import ball5 from "../../assets/img/dragonballs/ball5.png";
import ball6 from "../../assets/img/dragonballs/ball6.png";
import ball7 from "../../assets/img/dragonballs/ball7.png";
import turtleMaster from "../../assets/img/tortueGeniale.png";
import goku_normal from "../../assets/img/goku_normal.webp";

function ScoreBoard() {
  return (
    <section className="scoreboard">
      <article className="dragonBalls">
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
      <article className="score">
        <h3>
          Score :<br /> 00000
        </h3>
        <p>Level 1</p>
      </article>
      <article className="wrapperAvatar">
        <img className="avatar" src={goku_normal} alt="Goku" />
      </article>
    </section>
  );
}

export default ScoreBoard;