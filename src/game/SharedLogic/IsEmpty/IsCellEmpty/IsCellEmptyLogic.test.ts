import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../../Chess/Board';
import { Bishop } from '../../../Chess/Pieces/Bishop';
import { IsCellEmptyLogic } from './IsCellEmptyLogic';

describe('IsEmpty', () => {
	test('Is Cell Empty', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(1, 1);

		expect(IsCellEmptyLogic<typeof target, typeof target.piece>(target)).toBe(
			true
		);
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

		expect(IsCellEmptyLogic<typeof target, typeof target.piece>(target)).toBe(
			false
		);
	});
});
