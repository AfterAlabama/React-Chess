import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { Rook } from '../../../Pieces/Rook';
import { RookMovesWhileCastlingLogic } from './RookMovesWhileCastlingLogic';

describe('Rook Moves While Castling', () => {
	test('If No Match Returns False', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(6, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		expect(RookMovesWhileCastlingLogic(SpecialBoard)).toBe(false);
	});

	test('Left White Rook Moves', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(2, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		const setPiece = jest.spyOn(SpecialBoard.getCells(3, 7), 'setPiece');

		expect(SpecialBoard.getCells(0, 7).piece).toBeInstanceOf(Rook);
		expect(RookMovesWhileCastlingLogic(SpecialBoard)).toBe(true);

		RookMovesWhileCastlingLogic(SpecialBoard);

		expect(setPiece).toBeCalledTimes(1);
		expect(SpecialBoard.getCells(3, 7).piece).toBeInstanceOf(Rook);
		expect(SpecialBoard.getCells(0, 7).piece).toBeNull();
	});

	test('Right White Rook Moves', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(6, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		const setPiece = jest.spyOn(SpecialBoard.getCells(5, 7), 'setPiece');

		expect(SpecialBoard.getCells(7, 7).piece).toBeInstanceOf(Rook);
		expect(RookMovesWhileCastlingLogic(SpecialBoard)).toBe(true);

		RookMovesWhileCastlingLogic(SpecialBoard);

		expect(setPiece).toBeCalledTimes(1);
		expect(SpecialBoard.getCells(5, 7).piece).toBeInstanceOf(Rook);
		expect(SpecialBoard.getCells(7, 7).piece).toBeNull();
	});

	test('Left Black Rook Moves', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(2, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		const setPiece = jest.spyOn(SpecialBoard.getCells(3, 0), 'setPiece');

		expect(SpecialBoard.getCells(0, 0).piece).toBeInstanceOf(Rook);
		expect(RookMovesWhileCastlingLogic(SpecialBoard)).toBe(true);

		RookMovesWhileCastlingLogic(SpecialBoard);

		expect(setPiece).toBeCalledTimes(1);
		expect(SpecialBoard.getCells(3, 0).piece).toBeInstanceOf(Rook);
		expect(SpecialBoard.getCells(0, 0).piece).toBeNull();
	});

	test('Right Black Rook Moves', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(6, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();

		const setPiece = jest.spyOn(SpecialBoard.getCells(5, 0), 'setPiece');

		expect(SpecialBoard.getCells(7, 0).piece).toBeInstanceOf(Rook);
		expect(RookMovesWhileCastlingLogic(SpecialBoard)).toBe(true);

		RookMovesWhileCastlingLogic(SpecialBoard);

		expect(setPiece).toBeCalledTimes(1);
		expect(SpecialBoard.getCells(5, 0).piece).toBeInstanceOf(Rook);
		expect(SpecialBoard.getCells(7, 0).piece).toBeNull();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
