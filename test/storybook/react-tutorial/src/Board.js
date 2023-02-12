import React from "react";
import { Square } from "./Square";
import "./index.css";

export const Board = (props) => {
  return (
    <div>
      <div className="board-row">
        <BoardSquare
          square={props.squares[0]}
          handleClick={() => props.handleClick(0)}
        />
        <BoardSquare
          square={props.squares[1]}
          handleClick={() => props.handleClick(1)}
        />
        <BoardSquare
          square={props.squares[2]}
          handleClick={() => props.handleClick(2)}
        />
      </div>
      <div className="board-row">
        <BoardSquare
          square={props.squares[3]}
          handleClick={() => props.handleClick(3)}
        />
        <BoardSquare
          square={props.squares[4]}
          handleClick={() => props.handleClick(4)}
        />
        <BoardSquare
          square={props.squares[5]}
          handleClick={() => props.handleClick(5)}
        />
      </div>
      <div className="board-row">
        <BoardSquare
          square={props.squares[6]}
          handleClick={() => props.handleClick(6)}
        />
        <BoardSquare
          square={props.squares[7]}
          handleClick={() => props.handleClick(7)}
        />
        <BoardSquare
          square={props.squares[8]}
          handleClick={() => props.handleClick(8)}
        />
      </div>
    </div>
  );
};

const BoardSquare = (props) => {
  return <Square value={props.square} onClick={props.handleClick} />;
};
