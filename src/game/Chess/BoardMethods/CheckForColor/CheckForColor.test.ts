import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { King } from '../../Pieces/King';
import { CheckForColor } from './CheckForColor';

describe('CheckForColor', () => {
	test('Right Horizontal Cell Is Black', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();

		const king = SpecialBoard.getCells(3, 3);
		const cell = SpecialBoard.getCells(4, 3);

		expect(cell).toBeTruthy();
		expect(cell.color).toBe('black');

		CheckForColor(SpecialBoard, king);

		expect(king.color).toBe('white');
	});

	test('Right Horizontal Cell Is White', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 3));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();

		const king = SpecialBoard.getCells(4, 3);
		const cell = SpecialBoard.getCells(5, 3);

		expect(cell).toBeTruthy();
		expect(cell.color).toBe('white');

		CheckForColor(SpecialBoard, king);

		expect(king.color).toBe('black');
	});

	test('Left Horizontal Cell Is Black', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 3));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();

		const king = SpecialBoard.getCells(7, 3);
		const cell = SpecialBoard.getCells(6, 3);

		expect(cell).toBeTruthy();
		expect(SpecialBoard.getCells(king.y + 1, king.x)).toBeUndefined();
		expect(cell.color).toBe('black');

		CheckForColor(SpecialBoard, king);

		expect(king.color).toBe('white');
	});

	test('Left Horizontal Cell Is White', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 2));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();

		const king = SpecialBoard.getCells(7, 2);
		const cell = SpecialBoard.getCells(6, 2);

		expect(cell).toBeTruthy();
		expect(SpecialBoard.getCells(king.y + 1, king.x)).toBeUndefined();
		expect(cell.color).toBe('white');

		CheckForColor(SpecialBoard, king);

		expect(king.color).toBe('black');
	});
});
