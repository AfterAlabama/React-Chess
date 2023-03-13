import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { CanKingMoveLogic } from './CanKingMoveLogic';

describe('Can king Move', () => {
	test('King Can Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(6, 6);
		expect(CanKingMoveLogic(king, target)).toBe(true);
	});
	test('King Cannot Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const king = new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
		const target = SpecialBoard.getCells(5, 6);
		expect(CanKingMoveLogic(king, target)).toBe(false);
	});
});
