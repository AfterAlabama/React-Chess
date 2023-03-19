import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../../Chess/Board';
import { Bishop } from '../../../Chess/Pieces/Bishop';
import { IsVerticalEmptyLogic } from './IsVerticalEmptyLogic';

describe('Vertical', () => {
	test('Is Vertical Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(1, 7);

		expect(
			IsVerticalEmptyLogic<
				typeof SpecialBoard,
				typeof cell,
				typeof target.piece
			>(cell, target)
		).toBe(true);
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

		expect(
			IsVerticalEmptyLogic<
				typeof SpecialBoard,
				typeof cell,
				typeof target.piece
			>(cell, target)
		).toBe(false);
	});
});
