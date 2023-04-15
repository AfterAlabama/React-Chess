import { Colors } from '../../../../../types/Enums/Colors';
import { Cell } from '../../../Cell';
import { King } from '../../../Pieces/King';

export const CanKingCastleLogic = (king: King, target: Cell) => {
	if (king.isFirstStep && target.x === king.cell.x) {
		if (
			king.color === Colors.WHITE &&
			(target.y === king.cell.y + 2 || target.y === king.cell.y - 2)
		) {
			return true;
		}

		if (
			king.color === Colors.BLACK &&
			(target.y === king.cell.y + 2 || target.y === king.cell.y - 2)
		) {
			return true;
		}
	}
	return false;
};
