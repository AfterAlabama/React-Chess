import { FC } from 'react';
import { Colors } from '../../helpers/Colors';
import { ChCellProps } from '../../helpers/Props';
import cl from './ChCellComponent.module.scss';

const CheckersCellComponent: FC<ChCellProps> = ({cell, selected, click}) => {

  const cellStyle = [cl.cell, cell.color, selected ? cl.selected : ''].join(' ');

  return (
    <div
      className = {cellStyle}
      onClick = {() => click(cell)}
    >
      {(cell.piece?.logo && 
        cell.color === Colors.BLACK) && <img 
          alt = '' 
          src = {cell.piece?.logo} 
        /> }
    </div>
  )
}

export default CheckersCellComponent
