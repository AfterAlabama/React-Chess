import React, { FC, useEffect, useState } from 'react'
import { Boardprops } from '../helpers/Props';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

const BoardComponent: FC<Boardprops> = ({board, setBoard, currentPlayer, swapPlayers}) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


  useEffect(() => {
    highlightCells()
  }, [selectedCell])


  // highlights and moves pieces on click
  function click(target: Cell){
    if(selectedCell && selectedCell !== target && selectedCell.piece?.canMove(target)){
      selectedCell.movePiece(target);
      setSelectedCell(null)
      swapPlayers()
    } else {
      setSelectedCell(target)
    }

    if(selectedCell === target){
      setSelectedCell(null)
    }
    if(!target.piece){
      setSelectedCell(null)
    }
    if(target.piece?.color !== currentPlayer?.color){
      setSelectedCell(null)
    }
  }


  // displays cells on the board
  const showCells = board.cells.map(
    (row, index) => 
    <React.Fragment 
      key={index}>
      {row.map(
        cell => 
        <CellComponent 
          cell={cell} 
          key={cell.id}
          selected = {selectedCell?.x === cell.x && selectedCell?.y === cell.y}
          click={click}/>)}
    </React.Fragment>)


  // creates highlight dots and updates
  function highlightCells(){
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard(){
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <>
    <div className="board">
      {showCells}
    </div>
    </>
  )
}

export default BoardComponent
