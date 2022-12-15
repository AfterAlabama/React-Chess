import React, { FC, useCallback, useEffect } from "react";
import { Boardprops } from "../../helpers/Props";
import { Cell } from "../../models/Chess/Cell";
import CellComponent from "./CellComponent";

const BoardComponent: FC<Boardprops> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayers,
  selectedCell,
  setSelectedCell
}) => {

  // highlights and moves pieces on click
  function click(target: Cell) {
    if (
      selectedCell &&
      selectedCell !== target &&
      selectedCell.piece?.canMove(target)
    ) {
      selectedCell.movePiece(target);
      setSelectedCell(null);
      swapPlayers();
    } else {
      setSelectedCell(target);
    }

    if (selectedCell === target) {
      setSelectedCell(null);
    }
    if (!target.piece) {
      setSelectedCell(null);
    }
    if (target.piece?.color !== currentPlayer?.color) {
      setSelectedCell(null);
    }
  }

  // displays cells on the board
  const showCells = board.cells.map((row, index) => (
    <React.Fragment key={index}>
      {row.map((cell) => (
        <CellComponent
          cell={cell}
          key={cell.id}
          selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
          click={click}
        />
      ))}
    </React.Fragment>
  ));

  const updateBoard = useCallback(() => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }, [board, setBoard]);

  // creates highlight dots and updates
  const highlightCells = useCallback(() => {
    board.highlightCells(selectedCell);
    updateBoard();
  }, [selectedCell, board, updateBoard]);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <>
      <div className="board">{showCells}</div>
    </>
  );
};

export default BoardComponent;
