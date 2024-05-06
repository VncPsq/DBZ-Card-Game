import { Link, Outlet } from "react-router-dom";
import gohan_kid from "../assets/img/gohan_kid.webp";

function App() {
  return (
    <>
      <nav>
        <img src={gohan_kid} alt="Gohan" />
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/game">Game</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
