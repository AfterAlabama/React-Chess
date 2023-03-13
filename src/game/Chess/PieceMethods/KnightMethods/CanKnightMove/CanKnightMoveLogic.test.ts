import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Knight } from '../../../Pieces/Knight';
import { CanKnightMoveLogic } from './CanKnightMoveLogic';

describe('Can Knight Move', () => {
	test('Knight Can Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const knight = new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 5);
		expect(CanKnightMoveLogic(knight, target)).toBe(true);
	});

	test('Knight Cannot Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const knight = new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 6);
		expect(CanKnightMoveLogic(knight, target)).toBe(false);
	});
});
