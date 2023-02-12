import React, { useState } from "react";
import { Board } from "./Board";

// type GameProps = {
//   history: [{
//     squares: Array(9).fill(null),
//   }],
//   stepNumber: 0,
//   xIsNext: true,
// }

export const Game = (props) => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const cHistory = history.slice(0, stepNumber + 1);
    const current = cHistory[cHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i] !== null) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      cHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(cHistory.length);
    setXIsNext(!xIsNext);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((_, i) => (
            <li key={i}>
              <HistoryButton
                step={i}
                setStepNumber={setStepNumber}
                setXIsNext={setXIsNext}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const HistoryButton = (props) => {
  const desc = props.step ? "Go to move #" + props.step : "Go to game start";

  const jumpTo = (step) => {
    props.setStepNumber(step);
    props.setXIsNext(step % 2 === 0);
  };

  return <button onClick={() => jumpTo(props.step)}>{desc}</button>;
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
};
