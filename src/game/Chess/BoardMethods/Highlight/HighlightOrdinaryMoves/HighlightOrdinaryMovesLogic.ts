import { Board } from '../../../Board';
import { Cell } from '../../../Cell';

export const HighlightOrdinaryMovesLogic = (
	board: Board,
	selectedCell: Cell | null
): void => {
	for (let i = 0; i < board.cells.length; i++) {
		const row: Cell[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			target.available = !!selectedCell?.piece?.canMove(target);
		}
	}
};
