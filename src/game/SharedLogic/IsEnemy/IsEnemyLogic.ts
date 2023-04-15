import { Colors } from '../../../types/Enums/Colors';

export const IsEnemyLogic = <
	CELL extends {
		piece: PIECE;
	},
	PIECE extends {
		color: Colors;
	} | null
>(
	target: CELL,
	cell: CELL
): boolean => {
	if (target.piece && cell.piece?.color !== target.piece.color) {
		return true;
	}
	return false;
};
