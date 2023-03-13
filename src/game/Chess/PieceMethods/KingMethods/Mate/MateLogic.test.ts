import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Bishop } from '../../../Pieces/Bishop';
import { King } from '../../../Pieces/King';
import { Queen } from '../../../Pieces/Queen';
import { MateLogic } from './MateLogic';

describe(' Is Mate', () => {
	test('Mated', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(0, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(6, 6));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(5, 5));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		expect(MateLogic(SpecialBoard, Colors.WHITE)).toBe(true);
	});
	test('Not Mated', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(0, 7));
			new Queen(Colors.BLACK, SpecialBoard.getCells(6, 6));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		expect(MateLogic(SpecialBoard, Colors.WHITE)).toBe(false);
	});
});
