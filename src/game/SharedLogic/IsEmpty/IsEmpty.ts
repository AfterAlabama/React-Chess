import { IsCellEmptyLogic } from './IsCellEmpty/IsCellEmptyLogic';
import { IsDiagonalEmptyLogic } from './IsDiagonalEmpty/IsDiagonalEmptyLogic';
import { IsHorizontalEmptyLogic } from './IsHorizontalEmpty/IsHorizontalEmptyLogic';
import { IsVerticalEmptyLogic } from './IsVerticalEmpty/IsVerticalEmptyLogic';

export class IsEmpty {
	static Cell<
		CELL extends {
			piece: PIECE | null;
		},
		PIECE
	>(cell: CELL) {
		return IsCellEmptyLogic<CELL, PIECE>(cell);
	}

	static Vertical<
		BOARD extends {
			getCells: (y: number, x: number) => CELL;
		},
		CELL extends {
			y: number;
			x: number;
			board: BOARD;
			piece: PIECE | null;
		},
		PIECE
	>(cell: CELL, target: CELL): boolean {
		return IsVerticalEmptyLogic<BOARD, CELL, PIECE>(cell, target);
	}

	static Horizontal<
		BOARD extends {
			getCells: (y: number, x: number) => CELL;
		},
		CELL extends {
			y: number;
			x: number;
			board: BOARD;
			piece: PIECE | null;
		},
		PIECE
	>(cell: CELL, target: CELL) {
		return IsHorizontalEmptyLogic<BOARD, CELL, PIECE>(cell, target);
	}

	static Diagonal<
		BOARD extends {
			getCells: (y: number, x: number) => CELL;
		},
		CELL extends {
			y: number;
			x: number;
			board: BOARD;
			piece: PIECE | null;
		},
		PIECE
	>(cell: CELL, target: CELL) {
		return IsDiagonalEmptyLogic<BOARD, CELL, PIECE>(cell, target);
	}
}
