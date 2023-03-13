import { PieceNames } from '../../../../../../types/Enums/PieceNames';
import { Board } from '../../../../Board';
import { Cell } from '../../../../Cell';

export const DoesBishop = (
	randomCell: Cell,
	board: Board,
	movingCell: Cell,
	target: Cell,
	king: Cell
): boolean => {
	let count = 0;
	if (
		randomCell.piece &&
		randomCell.piece.name === PieceNames.BISHOP &&
		randomCell.piece.color !== king.piece!.color
	) {
		const absX = Math.abs(king.x - randomCell.x);

		const absY = Math.abs(king.y - randomCell.y);

		const dx = randomCell.x < king.x ? 1 : -1;

		const dy = randomCell.y < king.y ? 1 : -1;

		if (absX === absY && randomCell.piece.canMove(movingCell)) {
			for (let z = 0; z < absY; z++) {
				if (
					movingCell ===
					board.getCells(randomCell.y + dy * z, randomCell.x + dx * z)
				) {
					count += 1;
				}

				if (
					target ===
					board.getCells(randomCell.y + dy * z, randomCell.x + dx * z)
				) {
					count -= 1;
				}
			}
		}
	}
	return count === 1 ? true : false;
};
