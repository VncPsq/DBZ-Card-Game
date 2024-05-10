import { useApi } from "../../contexts/ApiContext";

import Card from "../features/Card";

function Playground({ startGame }) {
  const { characters, isLoading } = useApi();

  return (
    <article
      className="playground"
      style={!startGame ? { overflow: "hidden" } : { overflow: "auto" }}
    >
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
      {!startGame && <section className="modalePlayground"></section>}
    </article>
  );
}

export default Playground;
