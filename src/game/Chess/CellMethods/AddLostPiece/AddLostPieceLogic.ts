import { Colors } from '../../../../types/Enums/Colors';
import { Cell } from '../../Cell';
import { Piece } from '../../Pieces/Piece';

export const AddLostPieceLogic = (cell: Cell, piece: Piece): void => {
	if (piece.color === Colors.BLACK) {
		cell.board.lostBlackPieces.push(piece);
	}

	if (piece.color === Colors.WHITE) {
		cell.board.lostWhitePieces.push(piece);
	}
};
