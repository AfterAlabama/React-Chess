import { PieceNames } from '../../../../../../types/Enums/PieceNames';
import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const DoesRook = (
	randomCell: Cell,
	board: Board,
	movingCell: Cell,
	target: Cell,
	king: Cell
): boolean => {
	let count = 0;
	if (
		randomCell.piece &&
		randomCell.piece.name === PieceNames.ROOK &&
		randomCell.piece.color !== king.piece!.color
	) {
		//horizontal
		if (king.y === randomCell.y) {
			const min = Math.min(randomCell.x, king.x);

			const max = Math.max(randomCell.x, king.x);

			for (let x = min; x < max; x++) {
				if (randomCell.piece.canMove(movingCell)) {
					if (movingCell === board.getCells(randomCell.y, x)) {
						count += 1;
					}

					if (
						target === randomCell ||
						target === board.getCells(randomCell.y, x)
					) {
						count -= 1;
					}
				}
			}
		}

		//vertical
		if (king.x === randomCell.x) {
			const min1 = Math.min(king.y, randomCell.y);

			const max1 = Math.max(king.y, randomCell.y);

			for (let y = min1; y < max1; y++) {
				if (randomCell.piece.canMove(movingCell)) {
					if (
						target === randomCell ||
						target === board.getCells(y, randomCell.x)
					) {
						count -= 1;
					}

					if (movingCell === board.getCells(y, randomCell.x)) {
						count += 1;
					}
				}
			}
		}
	}
	return count === 1 ? true : false;
};
