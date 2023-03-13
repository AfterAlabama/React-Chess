import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Bishop } from '../../../Pieces/Bishop';
import { King } from '../../../Pieces/King';
import { IsKingUnderAttackLogic } from './IsKingUnderAttackLogic';

describe('Is King Under Attack', () => {
	test('Black King Is Under Attack', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(5, 5));
			new King(Colors.WHITE, SpecialBoard.getCells(7, 0));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const blackAttacker = SpecialBoard.getCells(3, 3);
		const blackKingCheck = true;
		const whiteKingCheck = false;
		const whiteAttacker = undefined;

		expect(IsKingUnderAttackLogic(SpecialBoard)).toEqual({
			blackKingCheck,
			whiteKingCheck,
			blackAttacker,
			whiteAttacker,
		});
	});
	test('White King Is Under Attack', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(5, 5));
			new King(Colors.BLACK, SpecialBoard.getCells(7, 0));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const whiteAttacker = SpecialBoard.getCells(3, 3);
		const blackKingCheck = false;
		const whiteKingCheck = true;
		const blackAttacker = undefined;

		expect(IsKingUnderAttackLogic(SpecialBoard)).toEqual({
			blackKingCheck,
			whiteKingCheck,
			blackAttacker,
			whiteAttacker,
		});
	});
	test('No King Is Under Attack', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new King(Colors.WHITE, SpecialBoard.getCells(5, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const whiteAttacker = undefined;
		const blackKingCheck = false;
		const whiteKingCheck = false;
		const blackAttacker = undefined;

		expect(IsKingUnderAttackLogic(SpecialBoard)).toEqual({
			blackKingCheck,
			whiteKingCheck,
			blackAttacker,
			whiteAttacker,
		});
	});
});
