import { Cell } from '../../Cell';

export const MovePieceLogic = (cell: Cell, target: Cell): void => {
	if (cell.piece && cell.piece.canMove(target)) {
		if (target.piece) {
			cell.addLostPiece(target.piece);
		}
		cell.piece.movePiece(target);
		target.setPiece(cell.piece);
		cell.piece = null;
	}
};
