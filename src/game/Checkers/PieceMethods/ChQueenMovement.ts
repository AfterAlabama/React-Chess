import { IsEmpty } from '../CellMethods/IsEmpty';
import { ChCell } from '../ChCell';

export class ChQueenMovement {
	static CanChQueenMove(target: ChCell, cell: ChCell): boolean {
		if (IsEmpty.Vertical(target, cell)) {
			return true;
		}
		return false;
	}
}
