import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { King } from '../../../../Pieces/King';
import { Rook } from '../../../../Pieces/Rook';
import { DoesRook } from './DoesRook';

describe('Does Rook Block The Check', () => {
	test('Rook Blocks The Check Via Vertical', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 1));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0, 4);
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);
		const movingCell = SpecialBoard.getCells(0, 3);

		expect(DoesRook(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test('Rook Blocks The Check Via Horizontal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(1, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(3, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 0);
		const king = SpecialBoard.getCells(7, 0);
		const attacker = SpecialBoard.getCells(1, 0);
		const movingCell = SpecialBoard.getCells(3, 0);

		expect(DoesRook(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test("Rook Doesn't Block The Check", () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(1, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(3, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 1);
		const king = SpecialBoard.getCells(7, 0);
		const attacker = SpecialBoard.getCells(1, 0);
		const movingCell = SpecialBoard.getCells(3, 0);

		expect(DoesRook(attacker, SpecialBoard, movingCell, target, king)).toBe(
			true
		);
	});
});
