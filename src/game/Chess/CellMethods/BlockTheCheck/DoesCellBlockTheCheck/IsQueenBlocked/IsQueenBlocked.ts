import { PieceNames } from '../../../../../../types/Enums/PieceNames';
import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const IsQueenBlocked = (
	attacker: Cell | undefined,
	king: Cell,
	target: Cell,
	board: Board
) => {
	if (attacker && attacker.piece?.name === PieceNames.QUEEN) {
		//diagonal
		const absY = Math.abs(king.y - attacker.y);
		const absX = Math.abs(king.x - attacker.x);

		const dy = attacker.y < king.y ? 1 : -1;
		const dx = attacker.x < king.x ? 1 : -1;
		if (absX === absY) {
			for (let i = 1; i < absY; i++) {
				if (
					target === board.getCells(attacker.y + dy * i, attacker.x + dx * i)
				) {
					return true;
				}
			}
		} else {
			//vertical
			const min = Math.min(attacker.x, king.x);
			const max = Math.max(attacker.x, king.x);

			for (let x = min + 1; x < max; x++) {
				if (target === board.getCells(attacker.y, x)) {
					return true;
				}
			}
			//horizontal
			const min1 = Math.min(attacker.y, king.y);
			const max1 = Math.max(attacker.y, king.y);

			for (let y = min1 + 1; y < max1; y++) {
				if (target === board.getCells(y, attacker.x)) {
					return true;
				}
			}
		}
	}
	return false;
};
