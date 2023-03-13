import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Cell } from '../../Cell';
import { Bishop } from '../../Pieces/Bishop';
import { King } from '../../Pieces/King';
import { KingMovesOutOfCheck } from './KingMovesOutOfCheck';

describe('King Moves Out Of Check', () => {
	test('Black King Escapes', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 1));
			new King(Colors.BLACK, SpecialBoard.getCells(5, 5));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(5, 5);
		const target = SpecialBoard.getCells(5, 4);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});
		const swapPlayers = jest.fn(() => {});

		KingMovesOutOfCheck(
			target,
			SpecialBoard,
			selectedCell,
			setSelectedCell,
			swapPlayers
		);

		expect(movePiece).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(null);
		expect(swapPlayers).toBeCalledTimes(1);
	});

	test('White King Escapes', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(0, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(5, 5));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(5, 5);
		const target = SpecialBoard.getCells(5, 4);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});
		const swapPlayers = jest.fn(() => {});

		KingMovesOutOfCheck(
			target,
			SpecialBoard,
			selectedCell,
			setSelectedCell,
			swapPlayers
		);

		expect(movePiece).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledTimes(1);
		expect(setSelectedCell).toBeCalledWith(null);
		expect(swapPlayers).toBeCalledTimes(1);
	});

	test('No Check', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 1));
			new King(Colors.BLACK, SpecialBoard.getCells(5, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(5, 5);
		const target = SpecialBoard.getCells(5, 4);
		const setSelectedCell = jest.fn((cell: Cell | null) => {
			if (cell) return;
			return;
		});
		const swapPlayers = jest.fn(() => {});

		KingMovesOutOfCheck(
			target,
			SpecialBoard,
			selectedCell,
			setSelectedCell,
			swapPlayers
		);

		expect(setSelectedCell).not.toBeCalled();
		expect(swapPlayers).not.toBeCalled();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
