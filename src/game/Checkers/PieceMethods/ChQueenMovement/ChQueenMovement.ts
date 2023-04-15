import { ChCell } from '../../ChCell';
import { CanChQueenMoveLogic } from './CanChQueenMove';

export class ChQueenMovement {
	static CanChQueenMove(target: ChCell, cell: ChCell) {
		return CanChQueenMoveLogic(target, cell)
	}
}
