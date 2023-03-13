import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { CheckForColor } from '../../../BoardMethods/CheckForColor/CheckForColor';
import { FindPiece } from '../../../BoardMethods/FindPiece/FindPiece';
import { Cell } from '../../../Cell';

export interface IsKingUnderAttackReturnValue {
	blackKingCheck: boolean;
	whiteKingCheck: boolean;
	blackAttacker: Cell | undefined;
	whiteAttacker: Cell | undefined;
}

export const IsKingUnderAttackLogic = (
	board: Board
): IsKingUnderAttackReturnValue => {
	const { blackKing, whiteKing } = FindPiece.findKings(board);

	let whiteKingCheck = false;
	let blackKingCheck = false;
	let blackAttacker;
	let whiteAttacker;

	for (let i = 0; i < board.cells.length; i++) {
		const row = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];

			if (target.piece && target.piece.attacksKing(blackKing)) {
				blackKingCheck = true;
				blackAttacker = target;
				blackKing.color = Colors.UNDERATTACK;
			}

			if (target.piece && target.piece.attacksKing(whiteKing)) {
				whiteKingCheck = true;
				whiteAttacker = target;
				whiteKing.color = Colors.UNDERATTACK;
			}

			if (!whiteKingCheck) {
				CheckForColor(board, whiteKing);
			}
			if (!blackKingCheck) {
				CheckForColor(board, blackKing);
			}
		}
	}
	return { blackKingCheck, whiteKingCheck, blackAttacker, whiteAttacker };
};
