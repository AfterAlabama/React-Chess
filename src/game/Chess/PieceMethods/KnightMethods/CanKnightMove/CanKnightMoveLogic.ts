import { Cell } from '../../../Cell';
import { Knight } from '../../../Pieces/Knight';

export const CanKnightMoveLogic = (knight: Knight, target: Cell) => {
	const dy = Math.abs(target.y - knight.cell.y);

	const dx = Math.abs(target.x - knight.cell.x);

	if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
		return true;
	}
	return false;
};
