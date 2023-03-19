export const GetCellsLogic = <
	T extends {
		cells: C[][];
		lostBlackPieces?: P[];
		lostWhitePieces?: P[];
	},
	C,
	P
>(
	y: number,
	x: number,
	board: T
): C => board.cells[x][y];
