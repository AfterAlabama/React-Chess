import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Bishop } from '../../../Pieces/Bishop';
import { King } from '../../../Pieces/King';
import { Rook } from '../../../Pieces/Rook';
import { PieceStandingInCheckLogic } from './PieceStandingInCheckLogic';

test('Piece Standing In Check', () => {
	const CreateSpecialBoard = () => {
		const SpecialBoard = new Board();
		SpecialBoard.initCells();
		new Rook(Colors.WHITE, SpecialBoard.getCells(5, 5));
		new King(Colors.WHITE, SpecialBoard.getCells(6, 6));
		new King(Colors.BLACK, SpecialBoard.getCells(0, 1));
		new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
		return SpecialBoard;
	};

	const SpecialBoard = CreateSpecialBoard();
	const selectedCell = SpecialBoard.getCells(5, 5);
	const target = SpecialBoard.getCells(5, 4);

	PieceStandingInCheckLogic(selectedCell, SpecialBoard);

	expect(target.available).toBe(false);
});
