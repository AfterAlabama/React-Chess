import { Colors } from '../../../../../types/Enums/Colors';
import { Cell } from '../../../Cell';
import { Pawn } from '../../../Pieces/Pawn';

export const IsPawnAttackLogic = (pawn: Pawn, target: Cell): boolean => {
	const direction = pawn.color === Colors.BLACK ? 1 : -1;

	if (
		target.x === pawn.cell.x + direction &&
		(target.y === pawn.cell.y + 1 || target.y === pawn.cell.y - 1) &&
		pawn.cell.isEnemy(target)
	) {
		return true;
	}
	return false;
};
