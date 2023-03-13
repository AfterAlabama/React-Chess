import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { Bishop } from '../../../../Pieces/Bishop';
import { King } from '../../../../Pieces/King';
import { DoesBishop } from './DoesBishop';

describe('Does Bishop Block the Check', () => {
	test('Bishop Blocks The Check', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const attacker = SpecialBoard.getCells(1, 1);
		const movingCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(5, 5);
		const king = SpecialBoard.getCells(7, 7);

		expect(DoesBishop(attacker, SpecialBoard, movingCell, target, king)).toBe(
			false
		);
	});
	test("Bishop  Doesn't Block The Check", () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const attacker = SpecialBoard.getCells(1, 1);
		const movingCell = SpecialBoard.getCells(3, 3);
		const target = SpecialBoard.getCells(5, 6);
		const king = SpecialBoard.getCells(7, 7);

		expect(DoesBishop(attacker, SpecialBoard, movingCell, target, king)).toBe(
			true
		);
	});
});
