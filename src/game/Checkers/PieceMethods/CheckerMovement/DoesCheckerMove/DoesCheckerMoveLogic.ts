import { Colors } from '../../../../../types/Enums/Colors';
import { ChCell } from '../../../ChCell';
import { Checker } from '../../../Pieces/Checker';

export const DoesCheckerMoveLogic = (
	checker: Checker,
	target: ChCell
) => {
	if (target.y === checker.cell.y - 1 || target.y === checker.cell.y + 1) {
		if (checker.color === Colors.WHITE && target.x === checker.cell.x - 1) {
			return true;
		}

		if (checker.color === Colors.BLACK && target.x === checker.cell.x + 1) {
			return true;
		}
	}
	return false;
};
