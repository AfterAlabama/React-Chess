import { Colors } from '../../../types/Enums/Colors';

export const InitCellslogic = <
	BOARD extends {
		cells: CELL[][];
	},
	PIECE,
	CELL
>(
	board: BOARD,
	CellClass: {
		new (x: number, y: number, color: Colors, board: BOARD, piece: PIECE | null): CELL;
	}
) => {
	for (let i = 0; i < 8; i++) {
		const row: CELL[] = [];
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
