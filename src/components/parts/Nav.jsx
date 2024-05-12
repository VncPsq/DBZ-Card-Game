import { Link } from "react-router-dom";
import gohan_kid from "../../assets/img/gohan_kid.webp";

function Nav() {
  return (
    <nav>
      <img src={gohan_kid} alt="Gohan" />
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </div>
    </nav>
  );
}

export default Nav;
