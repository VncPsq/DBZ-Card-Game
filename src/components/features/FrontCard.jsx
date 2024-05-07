import dbzLogo from "../../assets/img/dbzLogo.png";

function FrontCard({ character, flipCard }) {
  // Define the bg Card
  function setBackground(affiliation) {
    switch (affiliation) {
      case "Army of Frieza":
        return 'url("https://dragonball-api.com/planetas/PlanetaFreezer.webp")';
      case "Z Fighter":
      case "Other":
        return 'url("https://dragonball-api.com/planetas/Namek_U7.webp")';
      case "Villain":
        return 'url("https://dragonball-api.com/planetas/Tierra_Dragon_Ball_Z.webp")';
      case "Pride Troopers":
      case "Assistant of Vermoud":
        return 'url("https://dragonball-api.com/planetas/Universo_11.webp")';
      case "Assistant of Beerus":
        return 'url("https://dragonball-api.com/planetas/Templo_de_Bills2.webp")';
      default:
        return 'url("https://dragonball-api.com/planetas/800px-PlanetKannasa.webp")';
    }
  }
  // If name if too long -> Cute it
  function truncName(name, max) {
    if (name.length <= max) {
      return name;
    }
    return name.slice(0, max) + "...";
  }

  return (
    <figure
      onClick={flipCard}
      style={{
        backgroundImage: `${setBackground(character.affiliation)}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <section className="wrapperCard">
        <article className="headerCard">
          <h3 className="characterName">{truncName(character.name, 12)}</h3>
          <img className="imgLogo" src={dbzLogo} />
        </article>
        <article className="bodyCard">
          <img className="imgCharacter" src={character.image} />
          <p className="idCharacter"> {character.id}</p>
        </article>
      </section>
    </figure>
  );
}

export default FrontCard;
