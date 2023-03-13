import { Colors } from '../../../../../types/Enums/Colors';
import { Board } from '../../../Board';
import { Bishop } from '../../../Pieces/Bishop';
import { King } from '../../../Pieces/King';
import { KingEscapingLogic } from './KingEscapingLogic';

test('Kign Escaping', () => {
	const CreateSpecialBoard = () => {
		const SpecialBoard = new Board();
		SpecialBoard.initCells();
		new King(Colors.WHITE, SpecialBoard.getCells(5, 5));
		new King(Colors.BLACK, SpecialBoard.getCells(7, 0));
		new Bishop(Colors.BLACK, SpecialBoard.getCells(2, 1));
		return SpecialBoard;
	};

	const SpecialBoard = CreateSpecialBoard();
	const selectedCell = SpecialBoard.getCells(5, 5);
	const target = SpecialBoard.getCells(5, 4);

	KingEscapingLogic(selectedCell, SpecialBoard, target, Colors.WHITE);

	expect(target.available).toBe(false);
});
