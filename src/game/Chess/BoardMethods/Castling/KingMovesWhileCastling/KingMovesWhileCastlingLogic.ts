import { Colors } from '../../../../../types/Enums/Colors';
import { PieceNames } from '../../../../../types/Enums/PieceNames';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { Castling } from '../Castling';

export const KingMovesWhileCastlingLogic = (
	target: Cell,
	selectedCell: Cell | null,
	board: Board
): boolean => {
	let count = 0;
	if (
		selectedCell &&
		selectedCell.piece &&
		selectedCell.piece.isFirstStep &&
		selectedCell.piece.name === PieceNames.KING
	) {
		if (
			selectedCell.piece.color === Colors.WHITE &&
			target.x === 7 &&
			(target.y === 2 || target.y === 6)
		) {
			selectedCell.movePiece(target);
			Castling.RookMovesWhileCastling(board);
			count += 1;
		} else if (
			selectedCell.piece.color === Colors.BLACK &&
			target.x === 0 &&
			(target.y === 2 || target.y === 6)
		) {
			selectedCell.movePiece(target);
			Castling.RookMovesWhileCastling(board);
			count += 1;
		}
	}
	return count !== 0 ? true : false;
};
