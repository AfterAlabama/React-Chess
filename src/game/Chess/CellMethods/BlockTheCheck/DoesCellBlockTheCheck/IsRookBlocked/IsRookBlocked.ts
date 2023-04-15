import { PieceNames } from '../../../../../../types/Enums/PieceNames';
import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const IsRookBlocked = (
	attacker: Cell | undefined,
	king: Cell,
	target: Cell,
	board: Board
) => {
	if (attacker && attacker.piece?.name === PieceNames.ROOK) {
		const min = Math.min(attacker.x, king.x);
		const max = Math.max(attacker.x, king.x);

		for (let x = min + 1; x < max; x++) {
			if (target === board.getCells(attacker.y, x)) {
				return true;
			}
		}

		const min1 = Math.min(attacker.y, king.y);
		const max1 = Math.max(attacker.y, king.y);

		for (let y = min1 + 1; y < max1; y++) {
			if (target === board.getCells(y, attacker.x)) {
				return true;
			}
		}
	}
	return false;
};
