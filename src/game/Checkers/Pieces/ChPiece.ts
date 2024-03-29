import { Colors } from '../../../types/Enums/Colors';
import { PieceNames } from '../../../types/Enums/PieceNames';
import { ChCell } from '../ChCell';
import logo from '../../../assets/black attempt 1.png';

export abstract class ChPiece {
	color: Colors;
	name: PieceNames;
	logo: typeof logo | null;
	cell: ChCell;

	constructor(color: Colors, cell: ChCell) {
		this.color = color;
		this.name = PieceNames.CH_PIECE;
		this.cell = cell;
		this.cell.piece = this;
		this.logo = null;
	}

	public canMove(target: ChCell) {
		if (target.piece) {
			return false;
		}
		if (target.color !== Colors.BLACK) {
			return false;
		}
		return true;
	}
}
