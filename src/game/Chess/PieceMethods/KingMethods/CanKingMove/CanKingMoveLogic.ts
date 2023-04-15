import { Cell } from '../../../Cell';
import { King } from '../../../Pieces/King';

export const CanKingMoveLogic = (king: King, target: Cell) => {
	if (
		(target.x === king.cell.x + 1 ||
			target.x === king.cell.x - 1 ||
			target.x === king.cell.x) &&
		(target.y === king.cell.y + 1 ||
			target.y === king.cell.y - 1 ||
			target.y === king.cell.y)
	) {
		return true;
	}
	return false;
};
