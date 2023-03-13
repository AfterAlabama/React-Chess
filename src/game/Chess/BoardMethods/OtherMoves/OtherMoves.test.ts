import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { Bishop } from '../../Pieces/Bishop';
import { King } from '../../Pieces/King';
import { OtherMoves } from './OtherMoves';

describe('Other Moves', () => {
	test('No Selected Cell', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = null;
		const target = SpecialBoard.getCells(3, 3);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});

		OtherMoves(selectedCell, target, setSelectedCell, { color: Colors.WHITE });

		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(target);
	});

	test('Selected Cell And Target Cell Have The Same Color', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(4, 4));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(4, 4);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});

		OtherMoves(selectedCell, target, setSelectedCell, { color: Colors.WHITE });

		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(target);
	});

	test('Selected Cell and Target Are The Same', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(3, 3);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});

		OtherMoves(selectedCell, target, setSelectedCell, { color: Colors.WHITE });

		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(null);
	});

	test('Target Has No Piece', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(4, 4);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});

		OtherMoves(selectedCell, target, setSelectedCell, { color: Colors.WHITE });

		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(null);
	});

	test('Target Is Not Of The Current Player Color', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(1, 1);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});

		OtherMoves(selectedCell, target, setSelectedCell, { color: Colors.WHITE });

		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(null);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
