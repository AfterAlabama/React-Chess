import { Colors } from '../../../types/Enums/Colors';

export const InitCellslogic = <
	T extends {
		cells: C[][];
	},
	P,
	C
>(
	board: T,
	CellClass: {
		new (x: number, y: number, color: Colors, board: T, piece: P | null): C;
	}
): void => {
	for (let i = 0; i < 8; i++) {
		const row: C[] = [];
		for (let j = 0; j < 8; j++) {
			if ((i + j) % 2 !== 0) {
				row.push(new CellClass(i, j, Colors.BLACK, board, null));
			} else {
				row.push(new CellClass(i, j, Colors.WHITE, board, null));
			}
		}
		board.cells.push(row);
	}
};
