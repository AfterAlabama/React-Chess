import { IsEmpty } from '../IsEmpty';

export const IsVerticalEmptyLogic = <
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
	if (cell.y !== target.y) {
		return false;
	}

	const min = Math.min(cell.x, target.x);
	const max = Math.max(cell.x, target.x);

	for (let x = min + 1; x < max; x++) {
		if (!IsEmpty.Cell<C, typeof target.piece>(cell.board.getCells(cell.y, x))) {
			return false;
		}
	}
	return true;
};
