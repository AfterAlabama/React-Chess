import React, { FC, useCallback, useEffect } from "react";
import { PieceNames } from "../../helpers/PieceNames";
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

    const {blackKing, whiteKing} = board.findKings()

    if (
      selectedCell &&
      selectedCell !== target &&
      selectedCell.piece?.canMove(target)
    ) {

      if(selectedCell.piece.name === PieceNames.KING && selectedCell.piece.isFirstStep){
        if(selectedCell === whiteKing  && target.x === 7 && target.y === 2){
          selectedCell.movePiece(target);
          board.castling();
          setSelectedCell(null);
          swapPlayers();
        }
  
        if(selectedCell === whiteKing && target.x === 7 && target.y === 6){
          selectedCell.movePiece(target);
          board.castling()
          setSelectedCell(null);
          swapPlayers();
        }
  
        if(selectedCell === blackKing && target.x === 0 && target.y === 2){
          selectedCell.movePiece(target);
          board.castling()
          setSelectedCell(null);
          swapPlayers();
        }
  
        if(selectedCell === blackKing && target.x === 0 && target.y === 6){
          selectedCell.movePiece(target);
          board.castling()
          setSelectedCell(null);
          swapPlayers();
        }
      } 

      selectedCell.movePiece(target);
      setSelectedCell(null);
      swapPlayers();

    }
     else {
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
    newBoard.isKingUnderAttack();
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


  if(board.isKingUnderAttack().blackKingCheck === true){
    return (
      <div className = "check">
        <h1 id = "checkMessage">Black Checked!!</h1>
        <div className="board">{showCells}</div>
      </div>
    );
  }
  if(board.isKingUnderAttack().whiteKingCheck === true){
    return (
      <div className = 'check'>
        <h1 id="checkMessage">White Checked!!</h1>
        <div className="board">{showCells}</div>
      </div>
    );
  }

  return (
    <>
      <div className="board">{showCells}</div>
    </>
  );
};

export default BoardComponent;
