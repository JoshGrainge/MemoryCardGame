function Header({ score }) {
  return (
    <div className="header">
      <h1>Score: {score}</h1>
      <p className="rules-text">
        Get points by clicking on an image, but don't click on any card more
        than once!
      </p>
    </div>
  );
}

export default Header;
