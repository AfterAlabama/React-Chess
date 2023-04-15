import { Colors } from '../../../../../types/Enums/Colors';
import { PieceNames } from '../../../../../types/Enums/PieceNames';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';

export const FindKingsLogic = (board: Board) => {
	let blackKing = {} as Cell;
	let whiteKing = {} as Cell;

	for (let i = 0; i < board.cells.length; i++) {
		const row = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			if (
				target.piece &&
				target.piece.name === PieceNames.KING &&
				target.piece.color === Colors.BLACK
			) {
				blackKing = target;
			}
			if (
				target.piece &&
				target.piece.name === PieceNames.KING &&
				target.piece.color === Colors.WHITE
			) {
				whiteKing = target;
			}
		}
	}
	return { whiteKing, blackKing };
};
