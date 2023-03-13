import { Colors } from '../../../types/Enums/Colors';
import { Cell } from '../Cell';
import { Piece } from './Piece';
import blackLogo from '../../../assets/black-king.png';
import whiteLogo from '../../../assets/white-king.png';
import { PieceNames } from '../../../types/Enums/PieceNames';
import { KingMethods } from '../PieceMethods/KingMethods/KingMethods';

export class King extends Piece {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = PieceNames.KING;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (KingMethods.CanKingCastle(this, target)) {
			return true;
		}

		if (KingMethods.CanKingMove(this, target)) {
			return true;
		}
		return false;
	}

	public canProtect(target: Cell): boolean {
		if (KingMethods.CanKingProtect(this, target)) {
			return true;
		}
		return false;
	}

	public movePiece(target: Cell): void {
		this.isFirstStep = false;
		if (target) return;
	}
}
