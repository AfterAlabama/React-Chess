import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const CanAttackerBeTaken = (
	board: Board,
	target: Cell,
	king: Cell,
	attacker: Cell | undefined
): boolean => {
	for (let i = 0; i < board.cells.length; i++) {
		const row = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const randomCell = row[j];
			if (
				target === attacker &&
				randomCell !== king &&
				randomCell.piece?.canMove(target)
			) {
				return true;
			}
		}
	}
	return false;
};
