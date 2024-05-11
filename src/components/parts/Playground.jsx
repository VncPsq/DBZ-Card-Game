import { useApi } from "../../contexts/ApiContext";
import { useGame } from "../../contexts/GameContext";

import Card from "../features/Card";

function Playground() {
  const { sortedCards, isLoadingApi } = useApi();
  const { startLevel } = useGame();

  return (
    <article
      className="playground"
      style={!startLevel ? { overflow: "hidden" } : { overflow: "auto" }}
    >
      {!isLoadingApi ? (
        sortedCards.map((character) => (
          <Card
            key={`Card ${character.id} | ${character.name}`}
            character={character}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
      {!startLevel && <section className="modalePlayground"></section>}
    </article>
  );
}

export default Playground;
