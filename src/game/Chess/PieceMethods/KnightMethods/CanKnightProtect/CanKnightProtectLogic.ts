import { Cell } from '../../../Cell';
import { Knight } from '../../../Pieces/Knight';

export const CanKnightProtectLogic = (
	knight: Knight,
	target: Cell
): boolean => {
	const dy = Math.abs(target.y - knight.cell.y);

	const dx = Math.abs(target.x - knight.cell.x);

	if (
		target.piece &&
		target.piece.color === knight.color &&
		((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
	) {
		return true;
	}
	return false;
};
