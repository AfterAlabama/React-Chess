import { Cell } from '../../Chess/Cell';

export const MovePieceLogic = <
	CELL extends {
		piece: PIECE | null;
		addLostPiece?: (target: PIECE) => void;
		setPiece: (target: PIECE) => void;
	},
	PIECE extends {
		canMove: (target: CELL) => boolean;
		movePiece?: (target: CELL) => void;
	}
>(
	cell: CELL,
	target: CELL
) => {
	if (cell.piece && cell.piece.canMove(target)) {
		if (typeof target === typeof Cell) {
			if (target.piece) {
				cell.addLostPiece!(target.piece);
			}
			cell.piece.movePiece!(target);
		}
		target.setPiece(cell.piece);
		cell.piece = null;
	}
};
