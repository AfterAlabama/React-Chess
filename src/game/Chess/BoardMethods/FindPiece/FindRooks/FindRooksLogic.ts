import { Colors } from '../../../../../types/Enums/Colors';
import { PieceNames } from '../../../../../types/Enums/PieceNames';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { FindRooksReturnValue } from '../FindPiece';

export const FindRooksLogic = (board: Board): FindRooksReturnValue => {
	let leftBlackRook = {} as Cell;
	let rightBlackRook = {} as Cell;
	let leftWhiteRook = {} as Cell;
	let rightWhiteRook = {} as Cell;

	for (let i = 0; i < board.cells.length; i++) {
		const row = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			if (
				target.piece?.name === PieceNames.ROOK &&
				target.piece.color === Colors.BLACK &&
				target.x === 0 &&
				target.y === 0
			) {
				leftBlackRook = target;
			}

			if (
				target.piece?.name === PieceNames.ROOK &&
				target.piece.color === Colors.BLACK &&
				target.y === 7 &&
				target.x === 0
			) {
				rightBlackRook = target;
			}

			if (
				target.piece?.name === PieceNames.ROOK &&
				target.piece.color === Colors.WHITE &&
				target.y === 0 &&
				target.x === 7
			) {
				leftWhiteRook = target;
			}

			if (
				target.piece?.name === PieceNames.ROOK &&
				target.piece.color === Colors.WHITE &&
				target.y === 7 &&
				target.x === 7
			) {
				rightWhiteRook = target;
			}
		}
	}

	return [
		leftBlackRook.piece && leftBlackRook,
		rightBlackRook.piece && rightBlackRook,
		leftWhiteRook.piece && leftWhiteRook,
		rightWhiteRook.piece && rightWhiteRook,
	];
};
