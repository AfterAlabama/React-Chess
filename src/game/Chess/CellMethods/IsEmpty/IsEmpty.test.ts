import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { IsEmpty } from './IsEmpty';

describe('Is Empty', () => {
	test('Is Cell Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(1, 1);

		expect(IsEmpty.Cell(target)).toBe(true);
	});

	test('Is Cell Not Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(1, 1);

		expect(IsEmpty.Cell(target)).toBe(false);
	});

	test('Is Vertical Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(1, 7);

		expect(IsEmpty.Vertical(cell, target)).toBe(true);
	});

	test('Is Vertical Not Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(1, 7);

		expect(IsEmpty.Vertical(cell, target)).toBe(false);
	});

	test('Is Horizontal Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(7, 1);

		expect(IsEmpty.Horizontal(cell, target)).toBe(true);
	});

	test('Is Horizontal Not Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(5, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(7, 1);

		expect(IsEmpty.Horizontal(cell, target)).toBe(false);
	});

	test('Is Diagonal Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(7, 7);

		expect(IsEmpty.Diagonal(cell, target)).toBe(true);
	});
	test('Is Diagonal Not Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(5, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(7, 7);

		expect(IsEmpty.Diagonal(cell, target)).toBe(false);
	});
});
