import { FC } from 'react';
import { Colors } from '../../helpers/Colors';
import { ChCellProps } from '../../helpers/Props';
import cl from './ChCellComponent.module.scss';

const CheckersCellComponent: FC<ChCellProps> = ({cell, selected, click}) => {

  const cellStyle = [cl.cell, cell.color, selected ? cl.selected : ''].join(' ');

  const availableDots = (cell.available && !cell.piece && cell.color === Colors.BLACK) && <div className = {cl.available}></div>;

  const PieceUnderAttack = {
    background: cell.available && cell.piece  ? cl.underAttack : "",
  };

  return (
    <div
      className = {cellStyle}
      onClick = {() => click(cell)}
      style = {PieceUnderAttack}
    >
      {availableDots}
      {(cell.piece?.logo && 
        cell.color === Colors.BLACK) && <img 
          alt = '' 
          src = {cell.piece?.logo} 
        /> }
    </div>
  )
}

export default CheckersCellComponent
