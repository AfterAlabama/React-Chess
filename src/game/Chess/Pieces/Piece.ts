import { Colors } from '../../../types/Enums/Colors';
import { PieceNames } from '../../../types/Enums/PieceNames';
import logo from '../../../assets/black-bishop.png';
import { Cell } from '../Cell';

export interface Piece {
	canMove(target: Cell): boolean;
	canProtect?(target: Cell): boolean;
	movePiece(target: Cell): void;
}

export abstract class Piece {
	color: Colors;
	name: PieceNames;
	logo: typeof logo | null;
	cell: Cell;
	isFirstStep = true;
	count = 0;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.name = PieceNames.PIECE;
		this.cell = cell;
		this.cell.piece = this;
	}

	public attacksKing(target: Cell) {
		if (
			target.piece?.name === PieceNames.KING &&
			target.piece.color !== this.color &&
			this.canMove(target)
		) {
			return true;
		}
		return false;
	}

	public canMove(target: Cell) {
		if (this.color === target.piece?.color) {
			return false;
		}

		return true;
	}

	public movePiece(target: Cell) {
		this.isFirstStep = false;
		if (target) return;
	}
}
