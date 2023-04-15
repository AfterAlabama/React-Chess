import { IsEmpty } from '../IsEmpty';

export const IsVerticalEmptyLogic = <
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
	if (cell.y !== target.y) {
		return false;
	}

	const min = Math.min(cell.x, target.x);
	const max = Math.max(cell.x, target.x);

	for (let x = min + 1; x < max; x++) {
		if (!IsEmpty.Cell<CELL, typeof target.piece>(cell.board.getCells(cell.y, x))) {
			return false;
		}
	}
	return true;
};
