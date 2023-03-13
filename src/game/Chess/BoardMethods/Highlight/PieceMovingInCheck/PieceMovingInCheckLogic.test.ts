import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Bishop } from '../../../Pieces/Bishop';
import { King } from '../../../Pieces/King';
import { Rook } from '../../../Pieces/Rook';
import { PieceMovingInCheckLogic } from './PieceMovingInCheckLogic';

test('Piece Moving In Check', () => {
	const CreateSpecialBoard = () => {
		const SpecialBoard = new Board();
		SpecialBoard.initCells();
		new King(Colors.WHITE, SpecialBoard.getCells(5, 5));
		new King(Colors.BLACK, SpecialBoard.getCells(7, 0));
		new Rook(Colors.WHITE, SpecialBoard.getCells(4, 5));
		new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
		return SpecialBoard;
	};
	const SpecialBoard = CreateSpecialBoard();
	const selectedCell = SpecialBoard.getCells(4, 5);
	const target = SpecialBoard.getCells(0, 5);

	PieceMovingInCheckLogic(selectedCell, SpecialBoard, target);

	expect(target.available).toBe(false);
});
