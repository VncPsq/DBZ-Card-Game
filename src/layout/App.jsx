import FrontCard from "../components/FrontCard";
import ScoreBoard from "../components/ScoreBoard";

function App() {
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

export default App;
