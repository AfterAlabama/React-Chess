import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Cell } from '../../Cell';

export function CheckForColor(board: Board, king: Cell): void {
	if (board.getCells(king.y + 1, king.x)) {
		if (board.getCells(king.y + 1, king.x).color === Colors.BLACK) {
			king.color = Colors.WHITE;
		}
		if (board.getCells(king.y + 1, king.x).color === Colors.WHITE) {
			king.color = Colors.BLACK;
		}
	}

	if (!board.getCells(king.y + 1, king.x)) {
		if (board.getCells(king.y - 1, king.x).color === Colors.BLACK) {
			king.color = Colors.WHITE;
		}
		if (board.getCells(king.y - 1, king.x).color === Colors.WHITE) {
			king.color = Colors.BLACK;
		}
	}
}
