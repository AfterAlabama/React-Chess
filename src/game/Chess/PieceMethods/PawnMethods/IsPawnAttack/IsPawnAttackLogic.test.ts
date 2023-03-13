import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Pawn } from '../../../Pieces/Pawn';
import { IsPawnAttackLogic } from './IsPawnAttackLogic';

describe('Can Pawn Attack', () => {
	test('Pawn Can Attack', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			new Pawn(Colors.WHITE, SpecialBoard.getCells(4, 4));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const pawn = new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
		const target = SpecialBoard.getCells(4, 4);

		expect(IsPawnAttackLogic(pawn, target)).toBe(true);
	});

	test('Pawn Cannot Attack', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			new Pawn(Colors.BLACK, SpecialBoard.getCells(4, 4));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const pawn = new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
		const target = SpecialBoard.getCells(4, 4);

		expect(IsPawnAttackLogic(pawn, target)).toBe(false);
	});
});
