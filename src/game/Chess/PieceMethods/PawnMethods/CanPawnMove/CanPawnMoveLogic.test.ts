import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Pawn } from '../../../Pieces/Pawn';
import { CanPawnMoveLogic } from './CanPawnMoveLogic';

describe('Can Pawn Move', () => {
	test('Pawn Can Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(3, 4);
		const pawn = new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
		expect(CanPawnMoveLogic(pawn, target)).toBe(true);
	});

	test('Pawn Cannot Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(3, 2);
		const pawn = new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
		expect(CanPawnMoveLogic(pawn, target)).toBe(false);
	});
});
