import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { BlockCheck } from '../../../CellMethods/BlockTheCheck/BlockCheck';

export const PieceStandingInCheckLogic = (
	selectedCell: Cell | null,
	board: Board
): void => {
	for (let i = 0; i < board.cells.length; i++) {
		const row: Cell[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];

			if (
				selectedCell &&
				BlockCheck.doesPieceBlockTheCheck(target, board, selectedCell)
			) {
				target.available = false;
			}
		}
	}
};
