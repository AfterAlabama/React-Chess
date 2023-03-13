import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { Pawn } from '../../Pieces/Pawn';
import { IsCellUnderAttack } from './IsCellUnderAttack';

describe('Is Cell Under Attack', () => {
	test('Is Cell Attacked By Piece', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 4);

		expect(IsCellUnderAttack(SpecialBoard, Colors.WHITE, target)).toBe(true);
	});

	test('Is Cell Attacked By Pawn', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 4);

		expect(IsCellUnderAttack(SpecialBoard, Colors.WHITE, target)).toBe(true);
	});

	test('Is Cell Not Attacked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(4, 4);

		expect(IsCellUnderAttack(SpecialBoard, Colors.WHITE, target)).toBe(false);
	});
});
