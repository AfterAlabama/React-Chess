import { PieceNames } from '../../../../../types/Enums/PieceNames';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { BlockCheck } from '../../../CellMethods/BlockTheCheck/BlockCheck';
import { KingMethods } from '../../../PieceMethods/KingMethods/KingMethods';
import { FindPiece } from '../../FindPiece/FindPiece';

export const PieceMovingInCheckLogic = (
	selectedCell: Cell | null,
	board: Board
): void => {
	const { whiteKing, blackKing } = FindPiece.findKings(board);

	const { whiteKingCheck, blackKingCheck } =
		KingMethods.isKingUnderAttack(board);

	for (let i = 0; i < board.cells.length; i++) {
		const row: Cell[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];

			if (
				selectedCell &&
				selectedCell.piece &&
				selectedCell.piece.name !== PieceNames.KING &&
				((selectedCell.piece.color === whiteKing.piece?.color &&
					whiteKingCheck) ||
					(selectedCell.piece.color === blackKing.piece?.color &&
						blackKingCheck)) &&
				!BlockCheck.doesCellBlockTheCheck(target, board)
			) {
				target.available = false;
			}
		}
	}
};
