import { PieceNames } from '../../../../../../types/Enums/PieceNames';
import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const IsBishopBlocked = (
	attacker: Cell | undefined,
	king: Cell,
	target: Cell,
	board: Board
): boolean => {
	if (attacker && attacker.piece?.name === PieceNames.BISHOP) {
		const absY = Math.abs(king.y - attacker.y);
		const absX = Math.abs(king.x - attacker.x);

		if (absX !== absY) {
			return false;
		}

		const dy = attacker.y < king.y ? 1 : -1;
		const dx = attacker.x < king.x ? 1 : -1;

		for (let i = 1; i < absY; i++) {
			if (target === board.getCells(attacker.y + dy * i, attacker.x + dx * i)) {
				return true;
			}
		}
	}
	return false;
};
