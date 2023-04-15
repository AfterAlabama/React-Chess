import { Cell } from '../../Cell';
import { Player } from '../../Player';

export function OtherMoves(
	selectedCell: Cell | null,
	target: Cell,
	setSelectedCell: (cell: Cell | null) => void,
	currentPlayer: Player
) {
	if (
		!selectedCell ||
		(target.piece?.color === selectedCell?.piece?.color &&
			selectedCell !== target)
	) {
		setSelectedCell(target);
	}

	if (
		selectedCell === target ||
		!target.piece ||
		target.piece?.color !== currentPlayer?.color
	) {
		setSelectedCell(null);
	}
}
