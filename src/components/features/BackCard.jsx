import { useGame } from "../../contexts/GameContext";

import shenron from "../../assets/img/shenronBack.png";

function BackCard({ flipCard, character }) {
  const { handleCard } = useGame();

  const handleFlip = () => {
    flipCard();
    handleCard(character.affiliation, character.name);
  };

  return (
    <figure onClick={handleFlip}>
      <section className="wrapperBackCard">
        <img alt="Sheiron" src={shenron} />
      </section>
    </figure>
  );
}

export default BackCard;
