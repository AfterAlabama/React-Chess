import { FC, Fragment } from 'react';
import { ChBoardProps } from '../../helpers/Props';
import { ChCell } from '../../models/Checkers/ChCell';
import cl from './ChBoardComponent.module.scss'
import CheckersCellComponent from './CheckersCellComponent';


const CheckersBoardComponent: FC<ChBoardProps> = ({chBoard, setChBoard, selectedChCell, setSelectedChCell}) => {

  const click = (target: ChCell) => {
    if(
      !selectedChCell &&
      target.piece
    ){
      setSelectedChCell(target)
    };
    if(selectedChCell &&
      target !== selectedChCell){
        setSelectedChCell(target)
      }
    if(selectedChCell &&
      target === selectedChCell){
        setSelectedChCell(null)
      }
    if(!target.piece){
      setSelectedChCell(null)
    }
  };

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
