export default function Card(props) {
  return (
    <>
      <article className="cardArticle">
        <img src={props.imgUrl} alt={props.imgAltText} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </article>
    </>
  );
}
