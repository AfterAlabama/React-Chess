import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { CanKingCastleLogic } from './CanKingCastleLogic';

describe('Can King Castle', () => {
	test('King Can Castle', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(6, 7);
		const king = new King(Colors.WHITE, SpecialBoard.getCells(4, 7));

		expect(CanKingCastleLogic(king, target)).toBe(true);
	});

	test('King Cannot Castle', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(3, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(6, 7);
		const king = new King(Colors.WHITE, SpecialBoard.getCells(3, 7));

		expect(CanKingCastleLogic(king, target)).toBe(false);
	});
});
