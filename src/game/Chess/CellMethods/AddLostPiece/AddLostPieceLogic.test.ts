import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { AddLostPieceLogic } from './AddLostPieceLogic';

describe('Add Lost Pieces', () => {
	test('Add Black Piece', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(3, 3);
		const push = jest.spyOn(cell.board.lostBlackPieces, 'push');
		const piece = new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));

		AddLostPieceLogic(cell, piece);

		expect(push).toBeCalledTimes(1);
		expect(push).toBeCalledWith(piece);
	});
	test('Add White Piece', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(3, 3);
		const push = jest.spyOn(cell.board.lostWhitePieces, 'push');
		const piece = new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));

		AddLostPieceLogic(cell, piece);

		expect(push).toBeCalledTimes(1);
		expect(push).toBeCalledWith(piece);
	});
});
