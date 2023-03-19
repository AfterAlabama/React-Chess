import { Cell } from '../../Chess/Cell';

export const MovePieceLogic = <
	C extends {
		piece: P | null;
		addLostPiece?: (target: P) => void;
		setPiece: (target: P) => void;
	},
	P extends {
		canMove: (target: C) => boolean;
		movePiece?: (target: C) => void;
	}
>(
	cell: C,
	target: C
): void => {
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
