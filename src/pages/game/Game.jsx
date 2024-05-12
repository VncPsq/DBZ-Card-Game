import { useGame } from "../../contexts/GameContext";

import ScoreBoard from "../../components/parts/ScoreBoard";
import Playground from "../../components/parts/Playground";

function Game() {
  const { resumePick } = useGame();
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <ScoreBoard />
      <h2>{resumePick}</h2>

      <Playground />
    </section>
  );
}

export default Game;
