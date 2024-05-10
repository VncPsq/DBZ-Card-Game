import ScoreBoard from "../../components/parts/ScoreBoard";
import Playground from "../../components/parts/Playground";
import { useGame } from "../../contexts/GameContext";

function Game() {
  const { startGame, handleStartGame, spinDragonBall } = useGame();
  return (
    <section className="game">
      <h2>Ready to play ?</h2>
      <ScoreBoard
        handleStartGame={handleStartGame}
        spinDragonBall={spinDragonBall}
      />
      <h2>Touch San Goku to start the level</h2>
      <Playground startGame={startGame} />
    </section>
  );
}

export default Game;
