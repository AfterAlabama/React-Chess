import { Player } from '../../../../Chess/Player';
import { ChBoard } from '../../../ChBoard';
import { ChCell } from '../../../ChCell';
import { CheckerAttack } from '../../CheckerAttack/CheckerAttack';

export const OrdinaryMovesLogic = (
	selectedChCell: ChCell | null,
	target: ChCell,
	chBoard: ChBoard,
	setSelectedChCell: (cell: ChCell | null) => void,
	currentPlayer: Player,
	swapPlayers: () => void
): void => {
	if (
		selectedChCell &&
		(target === selectedChCell || !selectedChCell.piece?.canMove(target))
	) {
    setSelectedChCell(null);
	}
	if (
		(!selectedChCell &&
			target.piece &&
			target.piece.color === currentPlayer.color) ||
		(selectedChCell &&
			selectedChCell !== target &&
			target.piece &&
			target.piece.color === selectedChCell.piece?.color)
	) {
		setSelectedChCell(target);
	}

	if (
		selectedChCell &&
		selectedChCell !== target &&
		selectedChCell.piece?.canMove(target)
	) {
		CheckerAttack(selectedChCell, chBoard, target);

		selectedChCell.movePiece(target);
		setSelectedChCell(null);
		swapPlayers();
	}
};
