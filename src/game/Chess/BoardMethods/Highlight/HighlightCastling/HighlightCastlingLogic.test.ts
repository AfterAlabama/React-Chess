import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { Rook } from '../../../Pieces/Rook';
import { HighlightCastlingLogic } from './HighlightCastlingLogic';

describe('Highlight Castling', () => {
	test(' No Castling Possible - No Rook Available', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 7);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(false);
	});

	test(' No Castling Possible - King Is On The Other Line', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 6));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 6);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(false);
	});

	test(' No Castling Possible - King Already Moved', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 7);
		selectedCell.piece!.isFirstStep = false;

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(false);
	});

	test(' No Castling Possible - Rook Already Moved', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 7);
		SpecialBoard.getCells(0, 7).piece!.isFirstStep = false;

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(false);
	});

	test('Left White Castling', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 7);

		expect(SpecialBoard.getCells(2, 7).available).toBe(false);

		HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard);

		expect(SpecialBoard.getCells(2, 7).available).toBe(true);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(true);
	});

	test('Right White Castling', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 7);

		expect(SpecialBoard.getCells(6, 7).available).toBe(false);

		HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard);

		expect(SpecialBoard.getCells(6, 7).available).toBe(true);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.WHITE, SpecialBoard)
		).toBe(true);
	});

	test('Left Black Castling', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 0);

		expect(SpecialBoard.getCells(2, 0).available).toBe(false);

		HighlightCastlingLogic(selectedCell, Colors.BLACK, SpecialBoard);

		expect(SpecialBoard.getCells(2, 0).available).toBe(true);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.BLACK, SpecialBoard)
		).toBe(true);
	});

	test('Right Black Castling', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(4, 7));
			new King(Colors.BLACK, SpecialBoard.getCells(4, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const selectedCell = SpecialBoard.getCells(4, 0);

		expect(SpecialBoard.getCells(6, 0).available).toBe(false);

		HighlightCastlingLogic(selectedCell, Colors.BLACK, SpecialBoard);

		expect(SpecialBoard.getCells(6, 0).available).toBe(true);

		expect(
			HighlightCastlingLogic(selectedCell, Colors.BLACK, SpecialBoard)
		).toBe(true);
	});
});
