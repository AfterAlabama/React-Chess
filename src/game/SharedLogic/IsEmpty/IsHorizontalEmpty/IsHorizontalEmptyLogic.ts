import { IsEmpty } from '../IsEmpty';

export const IsHorizontalEmptyLogic = <
	T extends {
		getCells: (y: number, x: number) => C;
	},
	C extends {
		y: number;
		x: number;
		board: T;
		piece: P | null;
	},
	P
>(
	cell: C,
	target: C
) => {
	if (cell.x !== target.x) {
		return false;
	}

	const min = Math.min(cell.y, target.y);
	const max = Math.max(cell.y, target.y);

	for (let y = min + 1; y < max; y++) {
		if (!IsEmpty.Cell<C, typeof target.piece>(cell.board.getCells(y, cell.x))) {
			return false;
		}
	}
	return true;
};
