import { IsEmpty } from '../IsEmpty';

export const IsHorizontalEmptyLogic = <
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
>(
	cell: CELL,
	target: CELL
) => {
	if (cell.x !== target.x) {
		return false;
	}

	const min = Math.min(cell.y, target.y);
	const max = Math.max(cell.y, target.y);

	for (let y = min + 1; y < max; y++) {
		if (!IsEmpty.Cell<CELL, typeof target.piece>(cell.board.getCells(y, cell.x))) {
			return false;
		}
	}
	return true;
};
