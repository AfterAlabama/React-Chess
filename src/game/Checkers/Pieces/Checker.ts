import { Colors } from '../../../types/Enums/Colors';
import { PieceNames } from '../../../types/Enums/PieceNames';
import { ChCell } from '../ChCell';
import { ChPiece } from './ChPiece';
import blackLogo from '../../../assets/black attempt 1.png';
import whiteLogo from '../../../assets/white atempt 1.png';
import { CheckerMovement } from '../PieceMethods/CheckerMovement/CheckerMovement';

export class Checker extends ChPiece {
	constructor(color: Colors, cell: ChCell) {
		super(color, cell);
		this.name = PieceNames.CH_PIECE;
		this.logo = this.color === Colors.BLACK ? blackLogo : whiteLogo;
	}

	public canMove(target: ChCell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (CheckerMovement.DoesCheckerMove(this, target)) {
			return true;
		}

		if (CheckerMovement.DoesCheckerAttack(this, target)) {
			return true;
		}
		return false;
	}
}
