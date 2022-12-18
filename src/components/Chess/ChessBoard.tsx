import React, { useCallback, useEffect, useState } from "react";
import { Colors } from "../../helpers/Colors";
import { Board } from "../../models/Chess/Board";
import { Cell } from "../../models/Chess/Cell";
import { Player } from "../../models/Chess/Player";
import BoardComponent from "./BoardComponent";
import LostPieces from "./LostPieces";




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
    setCurrentPlayer(whitePlayer)}, 
    [whitePlayer]);


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
      <div style={{display: 'flex'}}>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayers={swapPlayers}
          selectedCell ={selectedCell}
          setSelectedCell = {setSelectedCell}
        />
        <LostPieces 
          title = "Black Pieces"
          pieces = {board.lostBlackPieces}/>
        <LostPieces 
          title = "White Pieces"
          pieces = {board.lostWhitePieces}/>
      </div>
    </div>
  );
};

export default ChessBoard;
