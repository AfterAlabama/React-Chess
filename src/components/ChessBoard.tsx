import React, { useEffect, useState } from 'react'
import { Colors } from '../helpers/Colors';
import { Board } from '../models/Board';
import { Player } from '../models/Player';
import BoardComponent from './BoardComponent';

const ChessBoard = () => {
  
  const [board, setBoard] = useState(new Board());

  const [whitePlayer, _] = useState(new Player(Colors.WHITE));

  const [blackPlayer, __] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  // Creates and updates the board
  function restart(){
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addPieces()
    setBoard(newBoard)
  }

  function swapPlayers(){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  
  return (
    <>
    <div className="turn">{currentPlayer?.color} to move</div>
    <div className = "chess">
      <BoardComponent 
        board = {board} 
        setBoard = {setBoard}
        currentPlayer = {currentPlayer}
        swapPlayers = {swapPlayers}
      />
    </div>
    </>
  )
}

export default ChessBoard
