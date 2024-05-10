import { useApi } from "../../contexts/ApiContext";
import { useGame } from "../../contexts/GameContext";

import Card from "../features/Card";

function Playground() {
  const { characters, isLoadingApi } = useApi();
  const { startGame } = useGame();

  return (
    <article
      className="playground"
      style={!startGame ? { overflow: "hidden" } : { overflow: "auto" }}
    >
      {!isLoadingApi ? (
        characters.map((character) => (
          <Card
            key={`Card ${character.id} | ${character.name}`}
            character={character}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {!startGame && <section className="modalePlayground"></section>}
    </article>
  );
}

export default Playground;
