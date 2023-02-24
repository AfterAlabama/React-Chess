import { FC, Fragment, useCallback, useEffect } from 'react';
import { Colors } from '../../helpers/Colors';
import { ChBoardProps } from '../../helpers/Props';
import { ChCell } from '../../models/Checkers/ChCell';
import cl from './ChBoardComponent.module.scss'
import CheckersCellComponent from './CheckersCellComponent';


const CheckersBoardComponent: FC<ChBoardProps> = ({chBoard, setChBoard, selectedChCell, setSelectedChCell}) => {

  const click = (target: ChCell) => {

    //attack logic
    if(selectedChCell?.piece?.canMove(target) && 
    (selectedChCell.x === target.x + 2 && 
    selectedChCell.y === target.y - 2)){
      chBoard.getCells(target.y - 1, target.x + 1).piece = null
    };

    if(selectedChCell?.piece?.canMove(target) && 
    (selectedChCell.x === target.x + 2 && 
    selectedChCell.y === target.y + 2)){
      chBoard.getCells(target.y + 1, target.x + 1).piece = null
    };

    if(selectedChCell?.piece?.canMove(target) && 
    (selectedChCell.x === target.x - 2 && 
    selectedChCell.y === target.y + 2)){
      chBoard.getCells(target.y + 1, target.x - 1).piece = null
    };

    if(selectedChCell?.piece?.canMove(target) && 
    (selectedChCell.x === target.x - 2 && 
    selectedChCell.y === target.y - 2)){
      chBoard.getCells(target.y - 1, target.x - 1).piece = null
    };


    if(target.piece && !selectedChCell){
      setSelectedChCell(target)
    };

    if(selectedChCell && target.piece?.color === selectedChCell.piece?.color){
      setSelectedChCell(null)
      setSelectedChCell(target)
    }

    if(selectedChCell && selectedChCell.piece?.canMove(target)){
      selectedChCell.movePiece(target)
      setSelectedChCell(null)
    }

    if(selectedChCell && selectedChCell === target){
      setSelectedChCell(null)
    }
    if(!target.piece || target.color === Colors.WHITE){
      setSelectedChCell(null)
    }
  };


  const highlightCells = () => {
    chBoard.highlightChCells(selectedChCell)
    updateBoard()
  };

  const updateBoard = useCallback(() => {
    const newBoard = chBoard.getCopyBoard();
    setChBoard(newBoard);
  }, [chBoard, setChBoard]);

  useEffect(() => {
    highlightCells()
  }, [selectedChCell])

  return (
    <div className = {cl.board} >
      {chBoard.cells.map((row, index) => 
      <Fragment
        key = {index}
      >
        {row.map(cell => <CheckersCellComponent
          key = {cell.id}
          cell = {cell}
          selected = {cell.x === selectedChCell?.x && cell.y === selectedChCell?.y}
          click = {click}
        />)}
      </Fragment>)}
    </div>
  )
}

export default CheckersBoardComponent
