import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { Bishop } from '../../../../Pieces/Bishop';
import { King } from '../../../../Pieces/King';
import { IsBishopBlocked } from './IsBishopBlocked';

describe(' Can Bishop Be Blocked', () => {
	test('Bishop Can Be Blocked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const attacker = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(4, 4);
		const king = SpecialBoard.getCells(7, 7);

		expect(IsBishopBlocked(attacker, king, target, SpecialBoard)).toBe(true);
	});

	test('Bishop Cannot Be Blocked', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const attacker = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(4, 5);
		const king = SpecialBoard.getCells(7, 7);

		expect(IsBishopBlocked(attacker, king, target, SpecialBoard)).toBe(false);
	});
});
