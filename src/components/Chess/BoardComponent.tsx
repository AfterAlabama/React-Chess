import React, { FC, useCallback, useEffect } from "react";
import { Colors } from "../../helpers/Colors";
import { PieceNames } from "../../helpers/PieceNames";
import { Boardprops } from "../../helpers/Props";
import { Cell } from "../../models/Chess/Cell";
import { Queen } from "../../models/Chess/Pieces/Queen";
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

    const {blackKingCheck, whiteKingCheck} = board.isKingUnderAttack()

    const {blackKing, whiteKing} = board.findKings()

    //king moves out of check
    if (
      selectedCell &&
      selectedCell !== target &&
      selectedCell.piece?.canMove(target)
    ) {     


      if(selectedCell === blackKing && blackKingCheck && selectedCell.piece.canMove(target)){
        selectedCell.movePiece(target);
        setSelectedCell(null);
        swapPlayers();

        for (let i = 0; i < board.cells.length; i++) {
          const row = board.cells[i];
          for (let j = 0; j < row.length; j++) {
            const target = row[j];
            if (
              (target.x === blackKing.x + 1 && target.y === blackKing.y) ||
              (target.x === blackKing.x && target.y === blackKing.y + 1)
            ) {
              if (target.color === Colors.BLACK) {
                blackKing.color = Colors.WHITE;
              }
              if (target.color === Colors.WHITE) {
                blackKing.color = Colors.BLACK;
              }
            }
          }
        }
      } else

      if(selectedCell === whiteKing && whiteKingCheck && selectedCell.piece.canMove(target)){
        selectedCell.movePiece(target);
        setSelectedCell(null);
        swapPlayers();

        for (let i = 0; i < board.cells.length; i++) {
          const row = board.cells[i];
          for (let j = 0; j < row.length; j++) {
            const target = row[j];
            if (
              (target.x === whiteKing.x - 1 && target.y === whiteKing.y) ||
              (target.x === whiteKing.x && target.y === whiteKing.y - 1)
            ) {
              if (target.color === Colors.BLACK) {
                whiteKing.color = Colors.WHITE;
              }
              if (target.color === Colors.WHITE) {
                whiteKing.color = Colors.BLACK;
              }
            }
          }
        }


      } else 

      if(selectedCell.piece.name === PieceNames.PAWN && selectedCell.piece.color === Colors.WHITE && target.x === 0){      
        const whiteQueen = new Queen(Colors.WHITE, board.getCells(target.y, target.x));    
        selectedCell.piece = null;
        target.setPiece(whiteQueen.cell.piece!);
      }

      if(selectedCell.piece?.name === PieceNames.PAWN && selectedCell.piece.color === Colors.BLACK && target.x === 7){
        const blackQueen = new Queen(Colors.BLACK, board.getCells(target.y, target.x));
        selectedCell.piece = null;
        target.setPiece(blackQueen.cell.piece!)
      }

      if(selectedCell.piece?.name === PieceNames.KING && selectedCell.piece.isFirstStep){
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
    board.highlightCells(selectedCell, currentPlayer?.color);
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
