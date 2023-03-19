import { Colors } from '../../../types/Enums/Colors';
import { Board } from '../../Chess/Board';
import { Bishop } from '../../Chess/Pieces/Bishop';
import { SetPieceLogic } from './SetPieceLogic';

test('Set Piece', () => {
	const CreateSpecialBoard = () => {
		const SpecialBoard = new Board();
		SpecialBoard.initCells();
		new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
		return SpecialBoard;
	};
	const SpecialBoard = CreateSpecialBoard();
	const cell = SpecialBoard.getCells(1, 1);

	expect(cell.piece).toBeNull();

	SetPieceLogic(cell, new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3)));

	expect(cell.piece).toBeInstanceOf(Bishop);
});
