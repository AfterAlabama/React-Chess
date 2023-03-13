import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { King } from '../../../../Pieces/King';
import { Rook } from '../../../../Pieces/Rook';
import { IsRookBlocked } from './IsRookBlocked';

describe('Can Rook Be Blocked', () => {
	test('Rook Can Be Blocked Via Horizontal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(1, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = SpecialBoard.getCells(7, 0);
		const attacker = SpecialBoard.getCells(1, 0);
		const target = SpecialBoard.getCells(4, 0);

		expect(IsRookBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});
	test('Rook Can Be Blocked Via Vertical', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);
		const target = SpecialBoard.getCells(0, 4);

		expect(IsRookBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});
	test('Rook Cannot Be Blocked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);
		const target = SpecialBoard.getCells(5, 4);

		expect(IsRookBlocked(attacker, king, target, SpecialBoard)).toBe(false);
	});
});
