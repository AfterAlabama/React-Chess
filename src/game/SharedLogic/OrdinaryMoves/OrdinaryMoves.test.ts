import { Colors } from '../../../types/Enums/Colors';
import { Board } from '../../Chess/Board';
import { Rook } from '../../Chess/Pieces/Rook';
import { OrdinaryMoves } from './OrdinaryMoves';

describe('Ordinary Moves', () => {
	test('Can move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(5, 7);
		const selectedCell = SpecialBoard.getCells(0, 7);

		OrdinaryMoves(SpecialBoard, selectedCell);

		expect(target.available).toBe(true);
	});
	test('Can move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(5, 5);
		const selectedCell = SpecialBoard.getCells(0, 7);

		OrdinaryMoves(SpecialBoard, selectedCell);

		expect(target.available).toBe(false);
	});
});
