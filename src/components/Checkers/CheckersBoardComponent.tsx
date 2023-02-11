import { FC, Fragment } from 'react';
import { ChBoardProps } from '../../helpers/Props';
import cl from './ChBoardComponent.module.scss'
import CheckersCellComponent from './CheckersCellComponent';


const CheckersBoardComponent: FC<ChBoardProps> = ({chBoard, setChBoard}) => {
  return (
    <div className = {cl.board} >
      {chBoard.cells.map((row, index) => 
      <Fragment
        key = {index}
      >
        {row.map(cell => <CheckersCellComponent
          key = {cell.id}
          cell = {cell}
        />)}
      </Fragment>)}
    </div>
  )
}

export default CheckersBoardComponent
