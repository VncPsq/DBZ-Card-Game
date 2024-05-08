import kamehouse from "../../assets/img/kamehouse.jpg";
import dbzLogo from "../../assets/img/dbzLogo.png";
import Button from "../../components/utilities/Button";
import Rules from "../../components/parts/Rules";

function Home() {
  return (
    <section className="home">
      <article
        className="hero"
        style={{
          backgroundImage: `url(${kamehouse})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="contentHero">
          <img className="imgLogo" src={dbzLogo} />
          <h1>Become the ultimate saiyan</h1>

          <article className="buttons">
            <Button className="btnPrimary">Play the game</Button>
            <Button className="btnSecondary">See the rules</Button>
          </article>
        </section>
      </article>
      <article>
        <h2>rules</h2>
        <Rules/>
      </article>
    </section>
  );
}

export default Home;
