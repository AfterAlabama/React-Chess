import { Colors } from '../../../../../types/Enums/Colors';
import { PieceNames } from '../../../../../types/Enums/PieceNames';
import { Board } from '../../../Board';
import { Cell } from '../../../Cell';
import { IsCellUnderAttack } from '../../../CellMethods/IsCellUnderAttack/IsCellUnderAttack';

export const KingEscapingLogic = (
	selectedCell: Cell | null,
	board: Board,
	currentColor: Colors
) => {
	for (let i = 0; i < board.cells.length; i++) {
		const row: Cell[] = board.cells[i];
		for (let j = 0; j < row.length; j++) {
			const target = row[j];
			if (
				selectedCell?.piece?.name === PieceNames.KING &&
				IsCellUnderAttack(board, currentColor, target)
			) {
				target.available = false;
			}
		}
	}
};
