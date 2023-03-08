function GameOverModal({ gameWon, newGameClick }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        {!gameWon && <h2>Game Over</h2>}
        {gameWon && <h2>You Won!</h2>}
        <button onClick={newGameClick}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverModal;
