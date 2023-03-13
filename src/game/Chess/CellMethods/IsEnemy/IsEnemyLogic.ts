import { Cell } from '../../Cell';

export const IsEnemyLogic = (target: Cell, cell: Cell): boolean => {
	if (target.piece && cell.piece?.color !== target.piece.color) {
		return true;
	}
	return false;
};
