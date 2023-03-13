import { Colors } from '../../../../../types/Enums/Colors';
import { Cell } from '../../../Cell';
import { IsEmpty } from '../../../CellMethods/IsEmpty/IsEmpty';
import { Pawn } from '../../../Pieces/Pawn';

export const CanPawnMoveLogic = (pawn: Pawn, target: Cell): boolean => {
	const direction = pawn.color === Colors.BLACK ? 1 : -1;

	const firstStep = pawn.color === Colors.BLACK ? 2 : -2;

	if (
		pawn.cell.y === target.y &&
		(target.x === pawn.cell.x + direction ||
			(pawn.isFirstStep &&
				target.x === pawn.cell.x + firstStep &&
				(pawn.color === Colors.BLACK
					? IsEmpty.Cell(pawn.cell.board.getCells(target.y, target.x - 1))
					: IsEmpty.Cell(pawn.cell.board.getCells(target.y, target.x + 1))))) &&
		IsEmpty.Cell(pawn.cell.board.getCells(target.y, target.x))
	) {
		return true;
	}
	return false;
};
