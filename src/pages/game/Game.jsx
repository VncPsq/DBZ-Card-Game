import ScoreBoard from "../../components/parts/ScoreBoard";
import Playground from "../../components/parts/Playground";

function Game() {
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <article>
        <ScoreBoard />
      </article>
      <article className="playground">
        <Playground />
      </article>
    </section>
  );
}

export default Game;
