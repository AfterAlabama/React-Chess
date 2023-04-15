import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { FindPiece } from '../../../BoardMethods/FindPiece/FindPiece';
import { BlockCheck } from '../../../CellMethods/BlockTheCheck/BlockCheck';
import { IsCellUnderAttack } from '../../../CellMethods/IsCellUnderAttack/IsCellUnderAttack';
import { KingMethods } from '../KingMethods';

export const MateLogic = (board: Board, currentColor: Colors) => {
	let count = 0;
	const { blackKing, whiteKing } = FindPiece.findKings(board);

	const { whiteKingCheck, blackKingCheck } =
		KingMethods.isKingUnderAttack(board);

	if (whiteKingCheck || blackKingCheck) {
		for (let i = 0; i < board.cells.length; i++) {
			const row = board.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j];

				for (let x = 0; x < board.cells.length; x++) {
					const row2 = board.cells[x];
					for (let z = 0; z < row2.length; z++) {
						const target2 = row2[z];

						if (
							(whiteKing.piece!.canMove(target) &&
								!IsCellUnderAttack(board, currentColor, target)) ||
							(target2.piece?.color === whiteKing.piece!.color &&
								target2.piece?.canMove(target) &&
								BlockCheck.doesCellBlockTheCheck(target, board)) ||
							(blackKing.piece!.canMove(target) &&
								!IsCellUnderAttack(board, currentColor, target)) ||
							(target2.piece?.color === blackKing.piece!.color &&
								target2.piece?.canMove(target) &&
								BlockCheck.doesCellBlockTheCheck(target, board))
						) {
							count += 1;
						}
					}
				}
			}
		}
		if (count > 0) {
			return false;
		} else {
			return true;
		}
	}
	return false;
};
