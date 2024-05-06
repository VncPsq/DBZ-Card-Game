import FrontCard from "../components/FrontCard";
import ScoreBoard from "../components/ScoreBoard";

function Game() {
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <article>
        <ScoreBoard />
      </article>
      <article className="playground">
        <FrontCard />
      </article>
    </section>
  );
}

export default Game;
