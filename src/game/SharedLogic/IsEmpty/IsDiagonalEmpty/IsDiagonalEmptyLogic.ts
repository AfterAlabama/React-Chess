import { IsEmpty } from '../IsEmpty';

export const IsDiagonalEmptyLogic = <
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
	const absY = Math.abs(cell.y - target.y);
	const absX = Math.abs(cell.x - target.x);

	if (absY !== absX) {
		return false;
	}

	const dy = cell.y < target.y ? 1 : -1;
	const dx = cell.x < target.x ? 1 : -1;

	for (let i = 1; i < absY; i++) {
		if (
			!IsEmpty.Cell<CELL, typeof target.piece>(
				cell.board.getCells(cell.y + dy * i, cell.x + dx * i)
			)
		) {
			return false;
		}
	}

	return true;
};
