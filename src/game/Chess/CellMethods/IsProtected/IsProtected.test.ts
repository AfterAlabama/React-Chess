import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { King } from '../../Pieces/King';
import { Rook } from '../../Pieces/Rook';
import { IsProtected } from './IsProtected';

describe('IsEmpty.Diagonal', () => {
	test('Is Diagonal Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(5, 5);

		expect(IsProtected.Diagonal(somePiece.piece!, target)).toBe(true);
	});

	test('Is Diagonal Protected With Enemy King In The Way', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			new King(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(5, 5);

		expect(IsProtected.Diagonal(somePiece.piece!, target)).toBe(true);
	});

	test('Is Diagonal Not Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(5, 5);

		expect(IsProtected.Diagonal(somePiece.piece!, target)).toBe(false);
	});
});

describe('IsEmpty.Vertical', () => {
	test('Is Vertical Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(0, 5);

		expect(IsProtected.Vertical(somePiece.piece!, target)).toBe(true);
	});

	test('Is Vertical Protected With Enemy King In The Way', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			new King(Colors.BLACK, SpecialBoard.getCells(0, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(0, 5);

		expect(IsProtected.Vertical(somePiece.piece!, target)).toBe(true);
	});

	test('Is Vertical Not Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(0, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(0, 5);

		expect(IsProtected.Diagonal(somePiece.piece!, target)).toBe(false);
	});
});

describe('IsEmpty.Horizontal', () => {
	test('Is Horizontal Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(5, 0);

		expect(IsProtected.Horizontal(somePiece.piece!, target)).toBe(true);
	});

	test('Is Horizontal Protected With Enemy King In The Way', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			new King(Colors.BLACK, SpecialBoard.getCells(3, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(5, 0);

		expect(IsProtected.Horizontal(somePiece.piece!, target)).toBe(true);
	});

	test('Is Horizontal Not Protected', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Rook(Colors.WHITE, SpecialBoard.getCells(0, 0));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 0));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const somePiece = SpecialBoard.getCells(0, 0);
		const target = SpecialBoard.getCells(5, 0);

		expect(IsProtected.Horizontal(somePiece.piece!, target)).toBe(false);
	});
});
