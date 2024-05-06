import kamehouse from "../../assets/img/kamehouse.jpg";
import dbzLogo from "../../assets/img/dbzLogo.png";
import Button from "../../components/parts/Button";

function Home() {
  return (
    <section className="home">
      <article className="hero">
        <img className="imgBg" src={kamehouse} alt="KameHouse" />
        <div className="contentHero">
          <img className="imgLogo" src={dbzLogo} />
          <Button />
        </div>
      </article>
      <article>
        <h2>rules</h2>
      </article>
    </section>
  );
}

export default Home;
