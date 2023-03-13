import { Colors } from '../../../../types/Enums/Colors';
import { PieceNames } from '../../../../types/Enums/PieceNames';
import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { Queen } from '../../Pieces/Queen';

export function PawnPromotion(
	target: Cell,
	selectedCell: Cell | null,
	board: Board
): boolean {
	if (
		selectedCell &&
		selectedCell.piece &&
		selectedCell.piece.name === PieceNames.PAWN
	) {
		if (target.x === 0) {
			const whiteQueen = new Queen(
				Colors.WHITE,
				board.getCells(target.y, target.x)
			);
			selectedCell.piece = null;
			target.setPiece(whiteQueen.cell.piece!);
			return true;
		}

		if (target.x === 7) {
			const blackQueen = new Queen(
				Colors.BLACK,
				board.getCells(target.y, target.x)
			);
			selectedCell.piece = null;
			target.setPiece(blackQueen.cell.piece!);
			return true;
		}
	}
	return false;
}
