import { Colors } from '../../../types/Enums/Colors';
import { Board } from '../../Chess/Board';
import { Bishop } from '../../Chess/Pieces/Bishop';
import { MovePieceLogic } from './MovePieceLogic';

describe('Move Piece', () => {
	test('Piece Can Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		cell.piece = new Bishop(
			Colors.WHITE,
			SpecialBoard.getCells(cell.y, cell.x)
		);
		const target = SpecialBoard.getCells(2, 2);
		const movePiece = jest.spyOn(cell.piece, 'movePiece');
		const setPiece = jest.spyOn(target, 'setPiece');

		MovePieceLogic(cell, target);

		expect(movePiece).toBeCalledTimes(1);
		expect(movePiece).toBeCalledWith(target);
		expect(setPiece).toBeCalledTimes(1);
		expect(setPiece).toBeCalledWith(target.piece);
	});

	test('Piece Cannot Move', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		cell.piece = new Bishop(
			Colors.WHITE,
			SpecialBoard.getCells(cell.y, cell.x)
		);
		const target = SpecialBoard.getCells(3, 2);
		const movePiece = jest.spyOn(cell.piece, 'movePiece');
		const setPiece = jest.spyOn(target, 'setPiece');

		MovePieceLogic(cell, target);

		expect(movePiece).not.toBeCalled();
		expect(setPiece).not.toBeCalled();
	});

	test('Piece Can Move And Take A piece', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(2, 2));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		cell.piece = new Bishop(
			Colors.WHITE,
			SpecialBoard.getCells(cell.y, cell.x)
		);
		const target = SpecialBoard.getCells(2, 2);
		const movePiece = jest.spyOn(cell.piece, 'movePiece');
		const addLost = jest.spyOn(cell, 'addLostPiece');

		MovePieceLogic(cell, target);

		expect(addLost).toBeCalledWith(
			new Bishop(Colors.BLACK, SpecialBoard.getCells(2, 2))
		);
		expect(addLost).toBeCalledTimes(1);
		expect(movePiece).toBeCalledWith(target);
		expect(movePiece).toBeCalledTimes(1);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
