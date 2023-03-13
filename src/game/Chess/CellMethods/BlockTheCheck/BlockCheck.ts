import { Board } from '../../Board';
import { FindPiece } from '../../BoardMethods/FindPiece/FindPiece';
import { Cell } from '../../Cell';
import { KingMethods } from '../../PieceMethods/KingMethods/KingMethods';
import { CanAttackerBeTaken } from './DoesCellBlockTheCheck/CanAttackerBeTaken/CanAttackerBeTaken';
import { IsBishopBlocked } from './DoesCellBlockTheCheck/IsBishopBlocked/IsBishopBlocked';
import { IsQueenBlocked } from './DoesCellBlockTheCheck/IsQueenBlocked/IsQueenBlocked';
import { IsRookBlocked } from './DoesCellBlockTheCheck/IsRookBlocked/IsRookBlocked';
import { DoesBishop } from './DoesPieceBlockTheCheck/DoesBishop/DoesBishop';
import { DoesQueen } from './DoesPieceBlockTheCheck/DoesQueen/DoesQueen';
import { DoesRook } from './DoesPieceBlockTheCheck/DoesRook/DoesRook';

export class BlockCheck {
	static doesPieceBlockTheCheck(
		target: Cell,
		board: Board,
		movingCell: Cell
	): boolean {
		const { blackKing, whiteKing } = FindPiece.findKings(board);

		for (let i = 0; i < board.cells.length; i++) {
			const row = board.cells[i];
			for (let j = 0; j < row.length; j++) {
				const randomCell = row[j];

				//black bishop
				if (DoesBishop(randomCell, board, movingCell, target, whiteKing)) {
					return true;
				}

				//white bishop
				if (DoesBishop(randomCell, board, movingCell, target, blackKing)) {
					return true;
				}

				//black rook
				if (DoesRook(randomCell, board, movingCell, target, whiteKing)) {
					return true;
				}

				//white rook
				if (DoesRook(randomCell, board, movingCell, target, blackKing)) {
					return true;
				}

				//black queen
				if (DoesQueen(randomCell, board, movingCell, target, whiteKing)) {
					return true;
				}

				//white queen
				if (DoesQueen(randomCell, board, movingCell, target, blackKing)) {
					return true;
				}
			}
		}
		return false;
	}

	static doesCellBlockTheCheck(target: Cell, board: Board): boolean {
		const { blackKing, whiteKing } = FindPiece.findKings(board);

		const { blackAttacker, whiteAttacker } =
			KingMethods.isKingUnderAttack(board);
		//black piece
		if (CanAttackerBeTaken(board, target, whiteKing, whiteAttacker)) {
			return true;
		}

		//white piece
		if (CanAttackerBeTaken(board, target, blackKing, blackAttacker)) {
			return true;
		}

		//black bishop
		if (IsBishopBlocked(whiteAttacker, whiteKing, target, board)) {
			return true;
		}

		//white bishop
		if (IsBishopBlocked(blackAttacker, blackKing, target, board)) {
			return true;
		}

		//black rook
		if (IsRookBlocked(whiteAttacker, whiteKing, target, board)) {
			return true;
		}

		//white rook
		if (IsRookBlocked(blackAttacker, blackKing, target, board)) {
			return true;
		}

		//black Queen
		if (IsQueenBlocked(whiteAttacker, whiteKing, target, board)) {
			return true;
		}

		//white Queen
		if (IsQueenBlocked(blackAttacker, blackKing, target, board)) {
			return true;
		}

		return false;
	}
}
