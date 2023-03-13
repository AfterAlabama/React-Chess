import { Board } from '../../Board';
import { CreateBoard } from './CreateBoard';

test('CreateBoard returns board', () => {
	const board = new Board();
	board.initCells();
	board.addPieces();
	expect(CreateBoard()).toEqual(board);
});
