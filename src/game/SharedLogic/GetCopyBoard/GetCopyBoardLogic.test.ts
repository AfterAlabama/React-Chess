import { Board } from '../../Chess/Board';
import { Cell } from '../../Chess/Cell';
import { Piece } from '../../Chess/Pieces/Piece';
import { GetCopyBoardLogic } from './GetCopyBoardLogic';

test('Get Copy Board', () => {
	const newBoard = new Board();
	newBoard.initCells();

	const board = new Board();
	board.initCells();

	newBoard.cells = board.cells;
	newBoard.lostBlackPieces = board.lostBlackPieces;
	newBoard.lostWhitePieces = board.lostWhitePieces;

	expect(GetCopyBoardLogic<Board, Cell, Piece>(board, Board)).toEqual(newBoard);
});
