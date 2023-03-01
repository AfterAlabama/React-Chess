import { FC, DragEvent } from 'react';
import { ChCellProps } from '../../helpers/Props/CheckersProps';
import { ChCell } from '../../models/Checkers/ChCell';
import cl from './ChCellComponent.module.scss';

const CheckersCellComponent: FC<ChCellProps> = ({
	cell,
	selected,
	click,
	currentPlayer,
	setSelectedChCell,
	selectedChCell,
}) => {
	const cellStyle = [cl.cell, cell.color, selected ? cl.selected : ''].join(
		' '
	);

	const availableDots = cell.available && !cell.piece && (
		<div className={cl.available}></div>
	);

	const showPieces = cell.piece?.logo ? (
		<img alt='' draggable={false} src={cell.piece?.logo} />
	) : (
		''
	);

	const showPiecesDraggable = cell.piece?.logo ? (
		<img
			alt=''
			src={cell.piece?.logo}
			onDragStart={() => dragStartHandler(cell)}
			onDragOver={(e) => dragOverHandler(e)}
			onDrop={(e) => dropHandler(e, cell)}
		/>
	) : (
		''
	);

	const dragStartHandler = (cell: ChCell) => {
		if(cell.piece){
			setSelectedChCell(cell);
		}
	};

	const dragOverHandler = (e: DragEvent<HTMLImageElement | HTMLDivElement>) => {
		e.preventDefault();
	};

	const dropHandler = (e: DragEvent<HTMLImageElement | HTMLDivElement>, cell: ChCell) => {
		e.preventDefault();
		if(selectedChCell && selectedChCell.piece && selectedChCell.piece.canMove(cell)){
			click(cell)
		}
	};

	return (
		<>
			{cell.piece && cell.piece.color === currentPlayer.color ? (
				<div className={cellStyle} onClick={() => click(cell)}>
					{availableDots}
					{showPiecesDraggable}
				</div>
			) : (
				<div 
					className={cellStyle} 
					onClick={() => click(cell)}
          onDragStart={() => dragStartHandler(cell)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, cell)}
					>
					{availableDots}
					{showPieces}
				</div>
			)}
		</>
	);
};

export default CheckersCellComponent;
