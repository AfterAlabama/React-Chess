import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../../Chess/Board';
import { Bishop } from '../../../Chess/Pieces/Bishop';
import { IsDiagonalEmptyLogic } from './IsDiagonalEmptyLogic';

describe('IsDiagonalEmptyLogic', () => {
	test('Is Diagonal Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(7, 7);

		expect(
			IsDiagonalEmptyLogic<
				typeof SpecialBoard,
				typeof cell,
				typeof target.piece
			>(cell, target)
		).toBe(true);
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

		expect(
			IsDiagonalEmptyLogic<
				typeof SpecialBoard,
				typeof cell,
				typeof target.piece
			>(cell, target)
		).toBe(false);
	});
});
