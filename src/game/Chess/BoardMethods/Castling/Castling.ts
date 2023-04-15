import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { KingMovesWhileCastlingLogic } from './KingMovesWhileCastling/KingMovesWhileCastlingLogic';
import { RookMovesWhileCastlingLogic } from './RookMovesWhileCastling/RookMovesWhileCastlingLogic';

export class Castling {
	static KingMovesWhileCastling(
		target: Cell,
		selectedCell: Cell | null,
		board: Board
	) {
		return KingMovesWhileCastlingLogic(target, selectedCell, board);
	}

	static RookMovesWhileCastling(board: Board) {
		return RookMovesWhileCastlingLogic(board);
	}
}
