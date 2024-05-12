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
          <h3>We need your help, please help us !</h3>
          <p>
            Bulma has been captured by Freezer ! He's hidding with his Army on
            Earth. Without Bulma, we can't unleashe the power of the Dragon
            Balls !
          </p>
          <h3>How to save Bulma ? Let me tell you</h3>
          <p>
            You will need to pick her's card. By saving her, you will pass a
            level and win 1000 points.
          </p>
          <h3>How to become more powerful ?</h3>
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
            If you pick a friend's card you earn : 500 extra points,
            <br />
            But be careful, If you pick an ennemy's card you lose 300 points
          </p>
          <h3>How many chances do I have ?</h3>
          <p>
            You will have 7 Dragon Balls to make to bigger score possible. Be
            careful if you pick Freezer, you lose a Dragon Ball. Good Luck my
            friend !
          </p>
          <Button>Play the game</Button>
        </>
      )}
    </section>
  );
}

export default Rules;
