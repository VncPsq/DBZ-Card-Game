import { useGame } from "../../contexts/GameContext";

import shenron from "../../assets/img/shenronBack.png";

function BackCard({ character, setIsFlipped }) {
  const { handleCard } = useGame();

  const handleFlip = () => {
    setIsFlipped(true);
    handleCard(character.affiliation, character.name);
  }; // Flip the card and handle infos character to set dynamic score

  return (
    <figure onClick={handleFlip}>
      <section className="wrapperBackCard">
        <img alt="Sheiron" src={shenron} />
      </section>
    </figure>
  );
}

export default BackCard;
