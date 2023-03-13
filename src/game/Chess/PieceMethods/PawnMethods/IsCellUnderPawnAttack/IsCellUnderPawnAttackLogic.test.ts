import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Pawn } from '../../../Pieces/Pawn';
import { IsCellUnderPawnAttackLogic } from './IsCellUnderPawnAttackLogic';

describe(' Is Cell Attacked By Pawn', () => {
	test('Cell Is Attacked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const pawn = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(4, 4);
		expect(IsCellUnderPawnAttackLogic(pawn, target)).toBe(true);
	});
	test('Cell Is Not Attacked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const pawn = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(3, 4);
		expect(IsCellUnderPawnAttackLogic(pawn, target)).toBe(false);
	});
});
