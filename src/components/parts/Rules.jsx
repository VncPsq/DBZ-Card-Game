import { useState } from "react";
import kaio from "../../assets/img/Kaio_del_Norte.webp";
import Button from "../../components/utilities/Button";

function Rules() {
  const [showRules, setShowRules] = useState(false);
  const toogleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <section className="rules">
      <figure onClick={toogleRules}>
        <img className="kaioRules" src={kaio} alt="Kaio" />
        <figcaption>
          Hello San Goku, I need to talk to you,{" "}
          <strong>please click on me</strong>
        </figcaption>
      </figure>
      {showRules && (
        <>
          <h3>Thanks A lot</h3>
          <p>
            Bulma has been captured by Frieza ! He's hidding with his Army on
            Earth. Without her, we can't unleashe the power of the Dragon Balls
            !
          </p>
          <h3>How to save Bulma ?</h3>
          <p>
            You will need to pick her's card. By saving her, you will pass a
            level and win 1000 points.
          </p>
          <h3>How to become a Super Sayian ?</h3>
          <p>
            To become a Super Sayian, you need : 2000 points,
            <br />
            To become a Super Sayian 2, you need : 5000 points,
            <br />
            To become a Super Sayian 3, you need : 7000 points,
            <br />
            To become a Super Sayian 4, you need : 8000 points,
            <br />
            To become a Super Sayian 5, you need : 10000 points,
            <br />
          </p>
          <h3>How to win more points ?</h3>
          <p>
            If you pick a friend's card you earn : 300 extra points,
            <br />
            But be careful, If you pick an ennemy's card you lose 300 points
          </p>
          <h3>How many chances do I Have</h3>
          <p>
            You will have 7 chances to make to bigger score possible, Good Luck
            !
          </p>
          <Button>Play the game</Button>
        </>
      )}
    </section>
  );
}

export default Rules;
