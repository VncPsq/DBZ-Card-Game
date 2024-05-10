import { useApi } from "../../contexts/ApiContext";
import Card from "../features/Card";
import radar from "../../assets/img/radar.png";
import Button from "../../components/utilities/Button";

function Playground() {
  const { characters, isLoading } = useApi();

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
      <section className="modalePlayground">
        <article className="modaleContent">
          <h3>Hurry up, she's in danger !</h3>
          <img src={radar} alt="Dragon Ball radar" />
          <button>Save Bulma</button>
        </article>
      </section>
    </article>
  );
}

export default Playground;
