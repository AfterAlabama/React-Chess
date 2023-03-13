import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { King } from '../../../../Pieces/King';
import { Queen } from '../../../../Pieces/Queen';
import { IsQueenBlocked } from './IsQueenBlocked';

describe('Can Queen Be Blocked', () => {
	test('Queen Can Be Blocked via diagonal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 4);
		const king = SpecialBoard.getCells(7, 7);
		const attacker = SpecialBoard.getCells(1, 1);

		expect(IsQueenBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});

	test('Queen Can Be Blocked via vertical', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Queen(Colors.BLACK, SpecialBoard.getCells(1, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 0);
		const king = SpecialBoard.getCells(7, 0);
		const attacker = SpecialBoard.getCells(1, 0);

		expect(IsQueenBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});

	test('Queen Can Be Blocked via horizontal', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(0, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0, 4);
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);

		expect(IsQueenBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});

	test('Queen Cannot Be Blocked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(0, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(3, 4);
		const king = SpecialBoard.getCells(0, 7);
		const attacker = SpecialBoard.getCells(0, 1);

		expect(IsQueenBlocked(attacker, king, target, SpecialBoard)).toBe(false);
	});
});
