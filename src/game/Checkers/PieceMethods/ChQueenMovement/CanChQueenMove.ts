import { IsEmpty } from '../../../SharedLogic/IsEmpty/IsEmpty';
import { ChCell } from '../../ChCell';

export const CanChQueenMoveLogic = (target: ChCell, cell: ChCell) => {
	if (IsEmpty.Vertical(target, cell)) {
		return true;
	}
	return false;
};
