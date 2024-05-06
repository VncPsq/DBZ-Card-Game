import { Outlet } from "react-router-dom";
import Nav from "../components/parts/Nav";
import "../assets/style/index.scss";
import "../pages/game/game.scss";
import "../pages/home/home.scss";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
