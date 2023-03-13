import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Rook } from '../../../Pieces/Rook';
import { FindRooksLogic } from './FindRooksLogic';

describe('Find Rooks Initial Positions', () => {
	test('All Rooks In Place', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();
		const leftWhiteRook = SpecialBoard.getCells(0, 7);
		const rightWhiteRook = SpecialBoard.getCells(7, 7);
		const leftBlackRook = SpecialBoard.getCells(0, 0);
		const rightBlackRook = SpecialBoard.getCells(7, 0);

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			leftBlackRook,
			rightBlackRook,
			leftWhiteRook,
			rightWhiteRook,
		]);
	});

	test('All Rooks In Place Except Left White One', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();
		const rightWhiteRook = SpecialBoard.getCells(7, 7);
		const leftBlackRook = SpecialBoard.getCells(0, 0);
		const rightBlackRook = SpecialBoard.getCells(7, 0);

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			leftBlackRook,
			rightBlackRook,
			undefined,
			rightWhiteRook,
		]);
	});

	test('All Rooks In Place Except Right White One', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();
		const leftWhiteRook = SpecialBoard.getCells(0, 7);
		const leftBlackRook = SpecialBoard.getCells(0, 0);
		const rightBlackRook = SpecialBoard.getCells(7, 0);

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			leftBlackRook,
			rightBlackRook,
			leftWhiteRook,
			undefined,
		]);
	});

	test('All Rooks In Place Except Left Black One', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(7, 0));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();
		const leftWhiteRook = SpecialBoard.getCells(0, 7);
		const rightWhiteRook = SpecialBoard.getCells(7, 7);
		const rightBlackRook = SpecialBoard.getCells(7, 0);

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			undefined,
			rightBlackRook,
			leftWhiteRook,
			rightWhiteRook,
		]);
	});

	test('All Rooks In Place Except Right Black One', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 7));
			new Rook(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Rook(Colors.BLACK, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();
		const leftWhiteRook = SpecialBoard.getCells(0, 7);
		const rightWhiteRook = SpecialBoard.getCells(7, 7);
		const leftBlackRook = SpecialBoard.getCells(0, 0);

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			leftBlackRook,
			undefined,
			leftWhiteRook,
			rightWhiteRook,
		]);
	});

	test('No Rooks Found', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			return SpecialBoard;
		};

		const SpecialBoard = CreateSpecialBoard();

		expect(FindRooksLogic(SpecialBoard)).toEqual([
			undefined,
			undefined,
			undefined,
			undefined,
		]);
	});
});
