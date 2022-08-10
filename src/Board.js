import Dice from "./Dice";
import './Board.css';

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  return (
    <>
      <h2 className="Board-heading">{name}</h2>
      <Dice className="Dice" color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(' + ')}</p>
    </>
  );
};

export default Board;