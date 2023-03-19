import { Colors } from '../../../types/Enums/Colors';
import { ChCell } from '../ChCell';
import { ChPiece } from './ChPiece';
import whiteLogo from '../../../assets/white-queen.png';
import blackLogo from '../../../assets/black-queen.png';
import { PieceNames } from '../../../types/Enums/PieceNames';
import { ChQueenMovement } from '../PieceMethods/ChQueenMovement/ChQueenMovement';

export class ChQueen extends ChPiece {
	constructor(color: Colors, cell: ChCell) {
		super(color, cell);
		this.logo = this.color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = PieceNames.CH_QUEEN;
	}

	public canMove(target: ChCell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		if (ChQueenMovement.CanChQueenMove(target, this.cell)) {
			return true;
		}
		return false;
	}
}
