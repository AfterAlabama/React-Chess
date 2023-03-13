import { Colors } from '../../../../types/Enums/Colors';
import { Cell } from '../../Cell';
import { Board } from '../../Board';

export const InitCellslogic = (board: Board): void => {
	for (let i = 0; i < 8; i++) {
		const row: Cell[] = [];
		for (let j = 0; j < 8; j++) {
			if ((i + j) % 2 !== 0) {
				row.push(new Cell(i, j, Colors.BLACK, board, null));
			} else {
				row.push(new Cell(i, j, Colors.WHITE, board, null));
			}
		}
		board.cells.push(row);
	}
};
