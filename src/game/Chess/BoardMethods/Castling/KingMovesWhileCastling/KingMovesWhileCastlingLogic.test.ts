import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { Rook } from '../../../Pieces/Rook';
import { Castling } from '../Castling';
import { KingMovesWhileCastlingLogic } from './KingMovesWhileCastlingLogic';

describe('KingMovesWhileCastling', () => {
	const findCell = (y: number, x: number, func: () => Board) =>
		func().getCells(y, x);

	test('If No Selected Cell - Return False', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = null;
		const target = findCell(2, 7, CreateSpecialBoard);

		expect(
			KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard)
		).toBe(false);
	});

	test('White King Castles to the left', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = findCell(4, 7, CreateSpecialBoard);
		const target = findCell(2, 7, CreateSpecialBoard);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const RookMoves = jest.spyOn(Castling, 'RookMovesWhileCastling');

		expect(
			KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard)
		).toBe(true);

		KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard);

		expect(movePiece).toBeCalledTimes(1);
		expect(RookMoves).toBeCalledTimes(1);
	});

	test('White King Castles to the right', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = findCell(4, 7, CreateSpecialBoard);
		const target = findCell(6, 7, CreateSpecialBoard);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const RookMoves = jest.spyOn(Castling, 'RookMovesWhileCastling');

		expect(
			KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard)
		).toBe(true);

		KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard);

		expect(movePiece).toBeCalledTimes(1);
		expect(RookMoves).toBeCalledTimes(1);
	});

	test('Black King Castles to the left', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = findCell(4, 0, CreateSpecialBoard);
		const target = findCell(2, 0, CreateSpecialBoard);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const RookMoves = jest.spyOn(Castling, 'RookMovesWhileCastling');

		expect(
			KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard)
		).toBe(true);

		KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard);

		expect(movePiece).toBeCalledTimes(1);
		expect(RookMoves).toBeCalledTimes(1);
	});

	test('Black King Castles to the right', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = findCell(4, 0, CreateSpecialBoard);
		const target = findCell(6, 0, CreateSpecialBoard);
		const movePiece = jest.spyOn(selectedCell, 'movePiece');
		const RookMoves = jest.spyOn(Castling, 'RookMovesWhileCastling');

		expect(
			KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard)
		).toBe(true);

		KingMovesWhileCastlingLogic(target, selectedCell, SpecialBoard);

		expect(movePiece).toBeCalledTimes(1);
		expect(RookMoves).toBeCalledTimes(1);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
