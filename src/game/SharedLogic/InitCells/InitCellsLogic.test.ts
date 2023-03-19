import { Colors } from '../../../types/Enums/Colors';
import { Cell } from '../../Chess/Cell';
import { Board } from '../../Chess/Board';
import { ChBoard } from '../../Checkers/ChBoard';
import { ChCell } from '../../Checkers/ChCell';

test('Chess Cells Successfully initialized', () => {
	const board = new Board();
	const row: Cell[] = [];
	const pushCell = jest.spyOn(row, 'push');
	const pushRow = jest.spyOn(board.cells, 'push');
	const init = jest.fn((board) => {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Cell(i, j, Colors.BLACK, board, null));
				} else {
					row.push(new Cell(i, j, Colors.WHITE, board, null));
				}
			}
			board.cells.push(row);
		}
	});

	init(board);

	expect(pushCell).toBeCalledTimes(64);
	expect(pushRow).toBeCalledTimes(8);
	expect(row).not.toEqual([]);
});


test('Checkers Cells Successfully initialized', () => {
	const board = new ChBoard();
	const row: ChCell[] = [];
	const pushCell = jest.spyOn(row, 'push');
	const pushRow = jest.spyOn(board.cells, 'push');
	const init = jest.fn((board: ChBoard) => {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new ChCell(i, j, Colors.BLACK, board, null));
				} else {
					row.push(new ChCell(i, j, Colors.WHITE, board, null));
				}
			}
			board.cells.push(row);
		}
	});

	init(board);

	expect(pushCell).toBeCalledTimes(64);
	expect(pushRow).toBeCalledTimes(8);
	expect(row).not.toEqual([]);
});
