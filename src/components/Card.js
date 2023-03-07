function Card({ handleClick, image, title }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt="Card icon" className="card-image" />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
