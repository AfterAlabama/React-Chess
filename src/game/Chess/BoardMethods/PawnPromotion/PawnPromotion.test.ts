import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Pawn } from '../../Pieces/Pawn';
import { Rook } from '../../Pieces/Rook';
import { PawnPromotion } from './PawnPromotion';

describe('Pawn Promotion', () => {
	test('Pawn Promotion Returns true', () => {
		const CreateSpecialBoard = () => {
			const board = new Board()
			board.initCells()
			new Pawn(Colors.WHITE, board.getCells(1,1))
			return board
		}
		const board = CreateSpecialBoard()
		const target = board.getCells(0,0);
		const selectedCell = board.getCells(1,1);

		expect(PawnPromotion(target, selectedCell, board)).toBe(true);
	});

	test('Pawn Promotion Returns false', () => {
		const board = new Board();
		board.initCells()
		const target = board.getCells(0,0);
		const selectedCell = null;

		expect(PawnPromotion(target, selectedCell, board)).toBe(false);
	});

	test('White Pawn Moves And Gets Promoted', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.WHITE, SpecialBoard.getCells(0, 1));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0,0);
		const selectedCell = SpecialBoard.getCells(0,1);
		const setPiece = jest.spyOn(target, 'setPiece');

		PawnPromotion(target, selectedCell, SpecialBoard);

		expect(selectedCell.piece).toBeNull();

		expect(target.piece).not.toBeNull();

		expect(setPiece).toBeCalledTimes(1);
	});

	test('White Pawn Attacks And Gets Promoted', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.WHITE, SpecialBoard.getCells(1, 1));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0,0);
		const selectedCell = SpecialBoard.getCells(1,1);
		const setPiece = jest.spyOn(target, 'setPiece');

		expect(target.piece).not.toBeNull();

		PawnPromotion(target, selectedCell, SpecialBoard);

		expect(selectedCell.piece).toBeNull();

		expect(setPiece).toBeCalledTimes(1);
	});

	test('Black Pawn Moves And Gets Promoted', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(0, 6));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0,7);
		const selectedCell = SpecialBoard.getCells(0,6);
		const setPiece = jest.spyOn(target, 'setPiece');

		PawnPromotion(target, selectedCell, SpecialBoard);

		expect(selectedCell.piece).toBeNull();

		expect(target.piece).not.toBeNull();

		expect(setPiece).toBeCalledTimes(1);
	});

	test('Black Pawn Attacks And Gets Promoted', () => {
		function CreateSpecialBoard() {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Pawn(Colors.BLACK, SpecialBoard.getCells(1, 6));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		}

		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(0,7);
		const selectedCell = SpecialBoard.getCells(1,6);
		const setPiece = jest.spyOn(target, 'setPiece');

		expect(target.piece).not.toBeNull();

		PawnPromotion(target, selectedCell, SpecialBoard);

		expect(selectedCell.piece).toBeNull();

		expect(setPiece).toBeCalledTimes(1);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});
