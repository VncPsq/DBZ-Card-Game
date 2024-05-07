function BackCard({ flipCard }) {
  return (
    <figure onClick={flipCard}>
      <section className="wrapperCard">
        <article className="headerCard">
          <h3 className="characterName">bob</h3>
        </article>
      </section>
    </figure>
  );
}

export default BackCard;
