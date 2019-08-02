import React, {useState} from 'react';
import Square from './Square';
import calculateWinner from '../helpers/CalculateWinner';

const Board = _ => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const squares = history[stepNumber].slice();
  const [isXnext, setXnext] = useState(true);
  const winnerObject = calculateWinner(squares);
  const winnerHighlight = winnerObject.line;
  console.log('history', history);
  console.log('squares', squares);


  const handleClick = index => {
    if(squares[index] || winnerObject.winner) return;
    squares[index] = isXnext ? 'X' : 'O';
    setHistory([...history.slice(0, stepNumber + 1), squares]);
    setStepNumber(stepNumber + 1);
    setXnext(!isXnext);

  }

  let status;
  if(winnerObject.winner) {
    status = 'The winner is ' + winnerObject.winner + ', congrats!!';
  } else if(winnerObject.isDraw) {
    status = 'It is a draw!';
  } else {
    status = 'Next player: ' + (isXnext ? 'X' : 'O');
  }

  const renderSquare = i => {
    return (
      <Square
        highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
        value={squares[i]}
        onClick={() =>handleClick(i)}
      />
    )
  }

  const jumpTo = move => {
    setStepNumber(move);
    setXnext((move % 2) === 0);
  };

  const renderStepButtons = history.map((step, move) => {
      const description = move ? 'got back to step #' + move : 'Start game!';
      return <li key={move}><button onClick={() => jumpTo(move)}> {description}</button></li>
  });

  return (
    <div className="board">
      <h2 className="title">TIC TAC TOE</h2>

      <p className="status">{status}</p>
      <div className="squares">
        <div className="square-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="square-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="square-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="steps">
        <ul>
          {renderStepButtons}
        </ul>
      </div>
      <div className="clearfix"></div>
    </div>
  )
}

export default Board;
