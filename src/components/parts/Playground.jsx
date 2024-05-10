import { useApi } from "../../contexts/ApiContext";
import { useGame } from "../../contexts/GameContext";

import Card from "../features/Card";
import radar from "../../assets/img/radar.png";

function Playground() {
  const { characters, isLoading } = useApi();
  const { startGame, handleStartGame } = useGame();

  return (
    <article className="playground">
      {!isLoading ? (
        characters.map((character) => (
          <Card
            key={`Card ${character.id} | ${character.name}`}
            character={character}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {!startGame && (
        <section className="modalePlayground">
          <article className="modaleContent">
            <h3>Hurry up, she's in danger !</h3>
            <img src={radar} alt="Dragon Ball radar" />
            <button onClick={handleStartGame}>Save Bulma</button>
          </article>
        </section>
      )}
    </article>
  );
}

export default Playground;
