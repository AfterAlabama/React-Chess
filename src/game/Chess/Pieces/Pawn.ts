import { Colors } from '../../../types/Enums/Colors';
import { Cell } from '../Cell';
import { Piece } from './Piece';
import blackLogo from '../../../assets/black-pawn.png';
import whiteLogo from '../../../assets/white-pawn.png';
import { PieceNames } from '../../../types/Enums/PieceNames';
import { PawnMethods } from '../PieceMethods/PawnMethods/PawnMethods';

export class Pawn extends Piece {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = PieceNames.PAWN;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (PawnMethods.CanPawnMove(this, target)) {
			return true;
		}

		if (PawnMethods.isPawnAttack(this, target)) {
			return true;
		}
		return false;
	}

	public movePiece(target: Cell): void {
		this.isFirstStep = false;
		this.count += 1;
		if (target) return;
	}
}
