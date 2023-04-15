import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { FindKingsLogic } from './FindKings/FindKingsLogic';
import { FindRooksLogic } from './FindRooks/FindRooksLogic';

export interface FindKingsReturnValue {
	whiteKing: Cell;
	blackKing: Cell;
}
export type FindRooksReturnValue = (Cell | null)[];

export class FindPiece {
	static findKings(board: Board) {
		return FindKingsLogic(board);
	}

	static findRooksInitialPosition(board: Board) {
		return FindRooksLogic(board);
	}
}
