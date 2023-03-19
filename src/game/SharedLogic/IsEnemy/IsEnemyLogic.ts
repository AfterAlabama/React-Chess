import { Colors } from '../../../types/Enums/Colors';

export const IsEnemyLogic = <
	C extends {
		piece: P;
	},
	P extends {
		color: Colors;
	} | null
>(
	target: C,
	cell: C
): boolean => {
	if (target.piece && cell.piece?.color !== target.piece.color) {
		return true;
	}
	return false;
};
