import shenron from "../../assets/img/shenronBack.png";

function BackCard({ flipCard }) {
  return (
    <figure onClick={flipCard}>
      <section className="wrapperBackCard">
        <img alt="Sheiron" src={shenron} />
      </section>
    </figure>
  );
}

export default BackCard;
