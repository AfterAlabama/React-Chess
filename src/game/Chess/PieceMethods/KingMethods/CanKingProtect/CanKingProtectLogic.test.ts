import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { Pawn } from '../../../Pieces/Pawn';
import { CanKingProtectLogic } from './CanKingProtectLogic';

describe(' Can king protect', () => {
	test('King Can Protect', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Pawn(Colors.WHITE, SpecialBoard.getCells(6, 6));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 6);

		expect(CanKingProtectLogic(king, target)).toBe(true);
	});

	test('King Cannot Protect', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Pawn(Colors.WHITE, SpecialBoard.getCells(5, 6));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(5, 6);

		expect(CanKingProtectLogic(king, target)).toBe(false);
	});
});
