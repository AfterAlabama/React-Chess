import { FC, Fragment, useCallback, useEffect } from 'react';
import { ChBoardProps } from '../../helpers/Props';
import { ChCell } from '../../models/Checkers/ChCell';
import cl from './ChBoardComponent.module.scss'
import CheckersCellComponent from './CheckersCellComponent';


const CheckersBoardComponent: FC<ChBoardProps> = ({chBoard, setChBoard, selectedChCell, setSelectedChCell}) => {

  const click = (target: ChCell) => {
    if(selectedChCell && target === selectedChCell){
      setSelectedChCell(null)
    } else
    if(selectedChCell && selectedChCell !== target && selectedChCell.piece?.canMove(target)){
      selectedChCell.movePiece(target)
      setSelectedChCell(null)
    } else {
      setSelectedChCell(target)
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
