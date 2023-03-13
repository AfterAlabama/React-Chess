import { Colors } from '../../../../../../types/Enums/Colors';
import { Board } from '../../../../Board';
import { Bishop } from '../../../../Pieces/Bishop';
import { King } from '../../../../Pieces/King';
import { CanAttackerBeTaken } from './CanAttackerBeTaken';

describe('Can Attacker Be Taken', () => {
	test('Attacker Can Be Taken', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(3, 3);
		const attacker = SpecialBoard.getCells(3, 3);
		const king = SpecialBoard.getCells(7, 7);

		expect(CanAttackerBeTaken(SpecialBoard, target, king, attacker)).toBe(true);
	});

	test('Attacker Cannot Be Taken', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new King(Colors.WHITE, SpecialBoard.getCells(7, 7));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const target = SpecialBoard.getCells(5, 3);
		const attacker = SpecialBoard.getCells(3, 3);
		const king = SpecialBoard.getCells(7, 7);

		expect(CanAttackerBeTaken(SpecialBoard, target, king, attacker)).toBe(
			false
		);
	});
});
