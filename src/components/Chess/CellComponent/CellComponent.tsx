import { FC, DragEvent } from 'react';
import { CellProps } from '../../../types/Props/ChessProps';
import { Cell } from '../../../game/Chess/Cell';
import cl from './CellComponent.module.scss';

const CellComponent: FC<CellProps> = ({
	cell,
	selected,
	click,
	setSelectedCell,
	selectedCell,
	currentPlayer,
}) => {
	const cellStyle = [cl.cell, cell.color, selected ? cl.selected : ''].join(
		' '
	);

	const showPieces = cell.piece?.logo ? (
		<img
			draggable={false}
			alt='Pieces'
			src={cell.piece.logo}
		></img>
	) : null;

	const showPiecesDraggable = cell.piece?.logo ? (
		<img
			draggable
			onDragStart={() => dragStartHandler(cell)}
			onDragOver={(e) => dragOverHandler(e)}
			onDrop={(e) => dropHandler(e, cell)}
			alt='PiecesDraggable'
			src={cell.piece.logo}
		></img>
	) : null;

	const availableDots =
		cell.available && !cell.piece ? <div className={cl.available}></div> : '';

	const PieceUnderAttack = {
		background: cell.available && cell.piece ? cl.underAttack : '',
	};

	function dragStartHandler(cell: Cell) {
		setSelectedCell(cell);
	}

	function dragOverHandler(e: DragEvent<HTMLImageElement | HTMLDivElement>) {
		e.preventDefault();
	}

	function dropHandler(
		e: DragEvent<HTMLImageElement | HTMLDivElement>,
		cell: Cell
	) {
		e.preventDefault();
		if (selectedCell && selectedCell.piece && cell.available) {
			click(cell);
		}
	}

	const DragCellCondition =
		cell.piece && cell.piece.color === currentPlayer.color ? (
			<div
				className={cellStyle}
				onClick={() => click(cell)}
				style={PieceUnderAttack}
			>
				{showPiecesDraggable}
				{availableDots}
			</div>
		) : (
			<div
				onDragStart={() => dragStartHandler(cell)}
				onDragOver={(e) => dragOverHandler(e)}
				onDrop={(e) => dropHandler(e, cell)}
				className={cellStyle}
				onClick={() => click(cell)}
				style={PieceUnderAttack}
			>
				{showPieces}
				{availableDots}
			</div>
		);

	return <>{DragCellCondition}</>;
};

export default CellComponent;
