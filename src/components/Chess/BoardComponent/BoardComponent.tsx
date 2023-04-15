import { FC, Fragment, useEffect } from 'react';
import { BoardProps } from '../../../types/Props/ChessProps';
import { Cell } from '../../../game/Chess/Cell';
import CellComponent from '../CellComponent/CellComponent';
import cl from './BoardComponent.module.scss';
import useSound from 'use-sound';
import moveSound from '../../../assets/6a897efd83627af.mp3';
import { PawnPromotion } from '../../../game/Chess/BoardMethods/PawnPromotion/PawnPromotion';
import { KingMovesOutOfCheck } from '../../../game/Chess/BoardMethods/KingMovesOutOfCheck/KingMovesOutOfCheck';
import { Castling } from '../../../game/Chess/BoardMethods/Castling/Castling';
import { OtherMoves } from '../../../game/Chess/BoardMethods/OtherMoves/OtherMoves';
import { KingMethods } from '../../../game/Chess/PieceMethods/KingMethods/KingMethods';

const BoardComponent: FC<BoardProps> = ({
	board,
	setBoard,
	currentPlayer,
	swapPlayers,
	selectedCell,
	setSelectedCell,
}) => {
	const [play] = useSound(moveSound);

	function click(target: Cell) {
		if (selectedCell && selectedCell !== target && target.available === true) {
			KingMovesOutOfCheck(
				target,
				board,
				selectedCell,
				setSelectedCell,
				swapPlayers
			);

			if (
				PawnPromotion(target, selectedCell, board) ||
				Castling.KingMovesWhileCastling(target, selectedCell, board)
			) {
				setSelectedCell(null);
				play();
				swapPlayers();
			} else {
				selectedCell.movePiece(target);
				setSelectedCell(null);
				play();
				swapPlayers();
			}
		}
		OtherMoves(selectedCell, target, setSelectedCell, currentPlayer);
	}

	const showCells = board.cells.map((row, index) => (
		<Fragment key={index}>
			{row.map((cell) => (
				<CellComponent
					cell={cell}
					key={cell.id}
					selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
					click={click}
					selectedCell={selectedCell}
					setSelectedCell={setSelectedCell}
					currentPlayer={currentPlayer}
				/>
			))}
		</Fragment>
	));

	const updateBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	useEffect(() => {
		board.highlightCells(selectedCell, currentPlayer.color);
		updateBoard();
	}, [selectedCell]);

	const BlackMatedCondition = KingMethods.Mate(board, currentPlayer.color) ? (
		<h1 className={cl.checkMessage}>Black Mated!!</h1>
	) : (
		<h1 className={cl.checkMessage}>Black Checked!!</h1>
	);

	const BlackCheckedCondition = KingMethods.isKingUnderAttack(board)
		.blackKingCheck ? (
		<div className={cl.check}>
			{BlackMatedCondition}
			<div className={cl.board}>{showCells}</div>
		</div>
	) : (
		<div className={cl.board}>{showCells}</div>
	);

	const whiteMatedCondition = KingMethods.Mate(board, currentPlayer.color) ? (
		<h1 className={cl.checkMessage}>White Mated!!</h1>
	) : (
		<h1 className={cl.checkMessage}>White Checked!!</h1>
	);

	const WhiteCheckedCondition = KingMethods.isKingUnderAttack(board)
		.whiteKingCheck ? (
		<div className={cl.check}>
			{whiteMatedCondition}
			<article className={cl.board}>{showCells}</article>
		</div>
	) : (
		BlackCheckedCondition
	);

	return <>{WhiteCheckedCondition}</>;
};

export default BoardComponent;
