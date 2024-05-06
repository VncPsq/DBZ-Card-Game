import FrontCard from "../components/FrontCard";
import ScoreBoard from "../components/ScoreBoard";

function Game() {
  return (
    <>
      <div className="grid">
        <ScoreBoard />
      </div>
      <div className="grid">
        <FrontCard />
      </div>
    </>
  );
}

export default Game;
