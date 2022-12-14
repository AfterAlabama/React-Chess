import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "../../helpers/Colors";
import { Board } from "../../models/Chess/Board";
import { Player } from "../../models/Chess/Player";
import BoardComponent from "./BoardComponent";

const ChessBoard = () => {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer] = useState(new Player(Colors.WHITE));

  const [blackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);


  // Creates and updates the board
  const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer)}, [whitePlayer]);


  useEffect(() => {
    restart();
  
  }, [restart]);

  function swapPlayers() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="chess">
      <div className="turn">{currentPlayer?.color} to move</div>
      <button className="restartBtn"
      onClick= {() => restart()}
      >Restart</button>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayers={swapPlayers}
      />
    </div>
  );
};

export default ChessBoard;
