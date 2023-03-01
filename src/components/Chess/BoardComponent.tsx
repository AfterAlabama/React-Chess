import React, { FC, useEffect } from "react";
import { Boardprops } from "../../helpers/Props/ChessProps";
import { Cell } from "../../models/Chess/Cell";
import CellComponent from "./CellComponent";
import cl from "./BoardComponent.module.scss";
import useSound from "use-sound";
import moveSound from "../../assets/6a897efd83627af.mp3";
import { PawnPromotion } from "../../models/Chess/BoardMethods/PawnPromotion";
import { KingMovesOutOfCheck } from "../../models/Chess/BoardMethods/KingMovesOutOfCheck";
import { Castling } from "../../models/Chess/BoardMethods/Castling";
import { OtherMoves } from "../../models/Chess/BoardMethods/OtherMoves";
import { KingMethods } from "../../models/Chess/PieceMethods/KingMethods";


const BoardComponent: FC<Boardprops> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayers,
  selectedCell,
  setSelectedCell,
}) => {

  const [play] = useSound(moveSound);

  function click(target: Cell) {
    if (
      selectedCell &&
      selectedCell !== target &&
      target.available === true
    ) {
      KingMovesOutOfCheck(
        target,
        board,
        selectedCell,
        setSelectedCell,
        swapPlayers
      );
      PawnPromotion(
        target,
        selectedCell,
        board
      );
      Castling.KingMovesWhileCastling(
        target,
        selectedCell,
        board,
        setSelectedCell,
        swapPlayers
      );
      selectedCell.movePiece(target);
      setSelectedCell(null);
      play();
      swapPlayers();
    };
    OtherMoves(
      selectedCell,
      target,
      setSelectedCell,
      currentPlayer
    );
  };

  const showCells = board.cells.map((row, index) => (
    <React.Fragment key={index}>
      {row.map((cell) => (
        <CellComponent
          cell={cell}
          key={cell.id}
          selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
          click={click}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          currentPlayer={currentPlayer}
        />
      ))}
    </React.Fragment>
  ));

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };


  useEffect(() => {
    board.highlightCells(selectedCell, currentPlayer.color);
    updateBoard();
  }, [selectedCell]);

  if (KingMethods.isKingUnderAttack(board).blackKingCheck) {
    return (
      <div className={cl.check}>
        {KingMethods.Mate(board, currentPlayer.color)
          ?
          <h1 className={cl.checkMessage}>Black Mated!!</h1>
          :
          <h1 className={cl.checkMessage}>Black Checked!!</h1>
        }
        <article className={cl.board}>{showCells}</article>
      </div>
    );
  };

  if (KingMethods.isKingUnderAttack(board).whiteKingCheck) {
    return (
      <div className={cl.check}>
        {KingMethods.Mate(board, currentPlayer.color)
          ?
          <h1 className={cl.checkMessage}>White Mated!!</h1>
          :
          <h1 className={cl.checkMessage}>White Checked!!</h1>
        }
        <article className={cl.board}>{showCells}</article>
      </div>
    );
  };

  return (
    <>
      <article className={cl.board}>{showCells}</article>
    </>
  );
};

export default BoardComponent;
