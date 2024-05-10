import { useApi } from "../../contexts/ApiContext";
import Card from "../features/Card";

function Playground() {
  const { characters, isLoading } = useApi();

  return (
    <>
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
    </>
  );
}

export default Playground;
