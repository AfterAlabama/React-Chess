import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { King } from '../../../Pieces/King';
import { FindKingsLogic } from './FindKingsLogic';

test('Find Kings', () => {
	const CreateSpecialBoard = () => {
		const SpecialBoard = new Board();
		SpecialBoard.initCells();
		new King(Colors.WHITE, SpecialBoard.getCells(3, 3));
		new King(Colors.BLACK, SpecialBoard.getCells(6, 6));
		return SpecialBoard;
	};

	const SpecialBoard = CreateSpecialBoard();
	const whiteKing = SpecialBoard.getCells(3, 3);
	const blackKing = SpecialBoard.getCells(6, 6);

	expect(FindKingsLogic(SpecialBoard)).toEqual({ whiteKing, blackKing });
});
