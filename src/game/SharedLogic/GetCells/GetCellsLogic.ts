export const GetCellsLogic = <
	BOARD extends {
		cells: CELL[][];
		lostBlackPieces?: PIECE[];
		lostWhitePieces?: PIECE[];
	},
	CELL,
	PIECE
>(
	y: number,
	x: number,
	board: BOARD
) => board.cells[x][y];
