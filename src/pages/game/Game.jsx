import { useGame } from "../../contexts/GameContext";

import ScoreBoard from "../../components/parts/ScoreBoard";
import Playground from "../../components/parts/Playground";

function Game() {
  const { startLevel } = useGame();
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <ScoreBoard />
      {!startLevel ? (
        <h2>Touch San Goku to start</h2>
      ) : (
        <h2>Find Bulma, beware of Freezer !</h2>
      )}
      <Playground />
    </section>
  );
}

export default Game;
