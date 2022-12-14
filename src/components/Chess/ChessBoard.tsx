import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "../../helpers/Colors";
import { Board } from "../../models/Chess/Board/Board";
import { Cell } from "../../models/Chess/Cell/Cell";
import { Player } from "../../models/Chess/Player/Player";
import BoardComponent from "./BoardComponent";
import LostPieces from "./LostPieces";
import classes from './ChessBoard.module.scss'

const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  // Creates and updates the board
  const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
    setSelectedCell(null);
    setCurrentPlayer(whitePlayer);
  }, [whitePlayer]);

  useEffect(() => {
    restart();
  }, [restart]);

  function swapPlayers() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className= {classes.chess}>
      <div className= {classes.turn}>
        {currentPlayer?.color} to move
      </div>
      <button 
        className= {classes.restartBtn} 
        onClick={restart}
        >Restart
      </button>
      <div className= {classes.flex}>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayers={swapPlayers}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
        <LostPieces 
          title="Black Pieces" 
          pieces={board.lostBlackPieces} 
        />
        <LostPieces 
          title="White Pieces" 
          pieces={board.lostWhitePieces} 
        />
      </div>
    </div>
  );
};

export default ChessBoard;
