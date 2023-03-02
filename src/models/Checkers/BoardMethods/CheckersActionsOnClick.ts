import { Colors } from '../../../helpers/Enums/Colors';
import { Player } from '../../Chess/Player';
import { ChBoard } from '../ChBoard';
import { ChCell } from '../ChCell';
import { ChQueen } from '../Pieces/ChQueen';
import { CheckerAttack } from './CheckerAttack';

export class CheckersActionsOnClick {
	static OrdinaryMoves(
		selectedChCell: ChCell | null,
		target: ChCell,
		chBoard: ChBoard,
		setSelectedChCell: (cell: ChCell | null) => void,
		currentPlayer: Player,
		swapPlayers: () => void
	) {
		if (selectedChCell && (target === selectedChCell || !selectedChCell.piece?.canMove(target))) {
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
	}

	static CheckerPromotion(
		selectedChCell: ChCell | null,
		target: ChCell,
		board: ChBoard,
		setSelectedChCell: (cell: ChCell | null) => void,
		swapPlayers: () => void
	) {
		//white checker
		if (
			selectedChCell &&
			selectedChCell.piece &&
			selectedChCell.piece.color === Colors.WHITE &&
			selectedChCell.piece.canMove(target) &&
			target.x === 0
		) {
			CheckerAttack(selectedChCell, board, target);

			setSelectedChCell(null);
			selectedChCell.piece = null;
			const whiteQueen = new ChQueen(Colors.WHITE, board.getCells(target.y, 0));
			target.setPiece(whiteQueen);
			swapPlayers();
		}

		//black checker
		if (
			selectedChCell &&
			selectedChCell.piece &&
			selectedChCell.piece.color === Colors.BLACK &&
			selectedChCell.piece.canMove(target) &&
			target.x === 7
		) {

			CheckerAttack(selectedChCell, board, target);

			setSelectedChCell(null);
			selectedChCell.piece = null;
			const blackQueen = new ChQueen(Colors.BLACK, board.getCells(target.y, 7));
			target.setPiece(blackQueen);
			swapPlayers();
		}
	}
}
