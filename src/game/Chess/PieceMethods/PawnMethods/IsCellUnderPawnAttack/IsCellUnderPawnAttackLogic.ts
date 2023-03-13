import { Colors } from '../../../../../types/Enums/Colors';
import { Cell } from '../../../Cell';

export const IsCellUnderPawnAttackLogic = (
	cell: Cell,
	target: Cell
): boolean => {
	const direction = cell.piece?.color === Colors.BLACK ? 1 : -1;

	if (
		target.x === cell.x + direction &&
		(target.y === cell.y + 1 || target.y === cell.y - 1)
	) {
		return true;
	}
	return false;
};
