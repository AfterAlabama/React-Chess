import { Cell } from '../../Cell';
import { Knight } from '../../Pieces/Knight';
import { CanKnightMoveLogic } from './CanKnightMove/CanKnightMoveLogic';
import { CanKnightProtectLogic } from './CanKnightProtect/CanKnightProtectLogic';

export class KnightMethods {
	static CanKnightMove(knight: Knight, target: Cell): boolean {
		return CanKnightMoveLogic(knight, target);
	}

	static CanKnightProtect(knight: Knight, target: Cell): boolean {
		return CanKnightProtectLogic(knight, target);
	}
}
