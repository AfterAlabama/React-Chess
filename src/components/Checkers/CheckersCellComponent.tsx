import { FC } from 'react';
import { ChCellProps } from '../../helpers/Props/CheckersProps';
import cl from './ChCellComponent.module.scss';

const CheckersCellComponent: FC<ChCellProps> = ({ cell, selected, click }) => {

  const cellStyle = [cl.cell, cell.color, selected ? cl.selected : ''].join(' ');

  const availableDots = (cell.available && !cell.piece) && <div className={cl.available}></div>;

  return (
    <div
      className={cellStyle}
      onClick={() => click(cell)}
    >
      {availableDots}
      {cell.piece?.logo ? <img
        alt=''
        src={cell.piece?.logo}
      /> : ''}
    </div>
  );
};

export default CheckersCellComponent;
