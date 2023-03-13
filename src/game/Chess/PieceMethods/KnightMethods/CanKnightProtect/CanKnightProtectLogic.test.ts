import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Knight } from '../../../Pieces/Knight';
import { Pawn } from '../../../Pieces/Pawn';
import { CanKnightProtectLogic } from './CanKnightProtectLogic';

describe('Can Knight Protect', () => {
	test('Knight Can protect', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
			new Pawn(Colors.BLACK, SpecialBoard.getCells(6, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const knight = new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 5);

		expect(CanKnightProtectLogic(knight, target)).toBe(true);
	});

	test('Knight Cannot protect', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const knight = new Knight(Colors.BLACK, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 5);

		expect(CanKnightProtectLogic(knight, target)).toBe(false);
	});
});
