import ScoreBoard from "../../components/parts/ScoreBoard";
import Playground from "../../components/parts/Playground";

function Game() {
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <ScoreBoard />
      <h2>Find Bulma</h2>
      <Playground />
    </section>
  );
}

export default Game;
