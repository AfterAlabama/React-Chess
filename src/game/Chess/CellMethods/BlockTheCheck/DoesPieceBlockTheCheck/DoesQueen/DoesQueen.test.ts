import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { King } from '../../../../Pieces/King';
import { Queen } from '../../../../Pieces/Queen';
import { DoesQueen } from './DoesQueen';

describe('Does Queen Block The Check', () => {
	test('Queen Blocks The Check Via Diagonal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new Queen(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(2, 2);
		const king = SpecialBoard.getCells(7, 7);
		const attacker = SpecialBoard.getCells(1, 1);
		const movingCell = SpecialBoard.getCells(3, 3);

		expect(DoesQueen(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test('Queen Blocks The Check Via Vertical', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(0, 1));
			new Queen(Colors.WHITE, SpecialBoard.getCells(0, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0, 2);
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);
		const movingCell = SpecialBoard.getCells(0, 3);

		expect(DoesQueen(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test('Queen Blocks The Check Via Horizontal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Queen(Colors.BLACK, SpecialBoard.getCells(1, 0));
			new Queen(Colors.WHITE, SpecialBoard.getCells(3, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(2, 0);
		const king = SpecialBoard.getCells(7, 0);
		const attacker = SpecialBoard.getCells(1, 0);
		const movingCell = SpecialBoard.getCells(3, 0);

		expect(DoesQueen(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test("Queen Doesn't Block The Check", () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new Queen(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(2, 3);
		const king = SpecialBoard.getCells(7, 7);
		const attacker = SpecialBoard.getCells(1, 1);
		const movingCell = SpecialBoard.getCells(3, 3);

		expect(DoesQueen(attacker, SpecialBoard, movingCell, target, king)).toBe(
			true
		);
	});
});
