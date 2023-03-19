import { FC, Fragment, useCallback, useEffect } from 'react';
import { ChBoardProps } from '../../../types/Props/CheckersProps';
import { CheckersActionsOnClick } from '../../../game/Checkers/BoardMethods/CheckersActionsOnClick/CheckersActionsOnClick';
import { ChCell } from '../../../game/Checkers/ChCell';
import cl from './ChBoardComponent.module.scss';
import CheckersCellComponent from '../CheckersCellComponent/CheckersCellComponent';

const CheckersBoardComponent: FC<ChBoardProps> = ({
	chBoard,
	setChBoard,
	selectedChCell,
	setSelectedChCell,
	currentPlayer,
	swapPlayers,
}) => {
	const click = (target: ChCell) => {
		CheckersActionsOnClick.CheckerPromotion(
			selectedChCell,
			target,
			chBoard,
			setSelectedChCell,
			swapPlayers
		);

		CheckersActionsOnClick.OrdinaryMoves(
			selectedChCell,
			target,
			chBoard,
			setSelectedChCell,
			currentPlayer,
			swapPlayers
		);
	};

	const highlightCells = () => {
		chBoard.highlightChCells(selectedChCell);
		updateBoard();
	};

	const updateBoard = useCallback(() => {
		const newBoard = chBoard.getCopyBoard();
		setChBoard(newBoard);
	}, [chBoard, setChBoard]);

	useEffect(() => {
		highlightCells();
	}, [selectedChCell]);

	const ShowCells = chBoard.cells.map((row, index) => (
		<Fragment key={index}>
			{row.map((cell) => (
				<CheckersCellComponent
					key={cell.id}
					cell={cell}
					selected={
						cell.x === selectedChCell?.x && cell.y === selectedChCell?.y
					}
					click={click}
					currentPlayer={currentPlayer}
					setSelectedChCell={setSelectedChCell}
					selectedChCell={selectedChCell}
				/>
			))}
		</Fragment>
	));

	return <div className={cl.board}>{ShowCells}</div>;
};

export default CheckersBoardComponent;
