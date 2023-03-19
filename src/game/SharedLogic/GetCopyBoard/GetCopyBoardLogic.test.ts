import { Board } from '../../Chess/Board';
import { GetCopyBoardLogic } from './GetCopyBoardLogic';

test('Get Copy Board', () => {
	const newBoard = new Board();
	newBoard.initCells();

	const board = new Board();
	board.initCells();

	newBoard.cells = board.cells;
	newBoard.lostBlackPieces = board.lostBlackPieces;
	newBoard.lostWhitePieces = board.lostWhitePieces;

	expect(GetCopyBoardLogic(board)).toEqual(newBoard);
});
