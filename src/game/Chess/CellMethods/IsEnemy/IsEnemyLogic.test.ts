import { Colors } from '../../../../types/Enums/Colors';
import { Board } from '../../Board';
import { Bishop } from '../../Pieces/Bishop';
import { IsEnemyLogic } from './IsEnemyLogic';

describe('Is Enemy', () => {
	test('There Is Enemy', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			new Bishop(Colors.WHITE, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(3, 3);

		expect(IsEnemyLogic(target, cell)).toBe(true);
	});
	test('There Is No Enemy', () => {
		const CreateSpecialBoard = () => {
			const SpecialBoard = new Board();
			SpecialBoard.initCells();
			new Bishop(Colors.BLACK, SpecialBoard.getCells(3, 3));
			new Bishop(Colors.BLACK, SpecialBoard.getCells(1, 1));
			return SpecialBoard;
		};
		const SpecialBoard = CreateSpecialBoard();
		const cell = SpecialBoard.getCells(1, 1);
		const target = SpecialBoard.getCells(3, 3);

		expect(IsEnemyLogic(target, cell)).toBe(false);
	});
});
