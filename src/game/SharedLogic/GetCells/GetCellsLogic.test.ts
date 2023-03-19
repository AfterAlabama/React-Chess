import { Board } from '../../Chess/Board';
import { GetCellsLogic } from './GetCellsLogic';

test('Cell was found successfuly', () => {
	const board = new Board();
	board.initCells();

	expect(GetCellsLogic(3, 5, board)).toEqual(board.getCells(3, 5));
});
