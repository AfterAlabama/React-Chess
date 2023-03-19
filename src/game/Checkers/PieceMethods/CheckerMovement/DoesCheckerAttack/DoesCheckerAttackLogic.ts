import { Colors } from '../../../../../types/Enums/Colors';
import { ChCell } from '../../../ChCell';
import { Checker } from '../../../Pieces/Checker';

export const DoesCheckerAttackLogic = (
	checker: Checker,
	target: ChCell
): boolean => {
	// White Checker
	if (
		checker.color === Colors.WHITE &&
		checker.cell.x === target.x + 2 &&
		!target.piece
	) {
		if (
			checker.cell.y === target.y - 2 &&
			checker.cell.board.getCells(target.y - 1, target.x + 1).piece &&
			checker.cell.board.getCells(target.y - 1, target.x + 1).piece?.color !==
				checker.color
		) {
			return true;
		}
		if (
			checker.cell.y === target.y + 2 &&
			checker.cell.board.getCells(target.y + 1, target.x + 1).piece &&
			checker.cell.board.getCells(target.y + 1, target.x + 1).piece?.color !==
				checker.color
		) {
			return true;
		}
	}

	// Black Checker
	if (
		checker.color === Colors.BLACK &&
		checker.cell.x === target.x - 2 &&
		!target.piece
	) {
		if (
			checker.cell.y === target.y - 2 &&
			checker.cell.board.getCells(target.y - 1, target.x - 1).piece &&
			checker.cell.board.getCells(target.y - 1, target.x - 1).piece?.color !==
				checker.color
		) {
			return true;
		}
		if (
			checker.cell.y === target.y + 2 &&
			checker.cell.board.getCells(target.y + 1, target.x - 1).piece &&
			checker.cell.board.getCells(target.y + 1, target.x - 1).piece?.color !==
				checker.color
		) {
			return true;
		}
	}
	return false;
};
