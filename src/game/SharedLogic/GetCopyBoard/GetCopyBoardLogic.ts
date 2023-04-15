export const GetCopyBoardLogic = <
	BOARD extends {
		cells: CELL[][];
		lostBlackPieces?: PIECE[];
		lostWhitePieces?: PIECE[];
	},
	CELL,
	PIECE
>(
	prevBoard: BOARD,
	nextBoard: {
		new (): BOARD;
	}
) => {
	const newBoard = new nextBoard();
	newBoard.cells = prevBoard.cells;
	newBoard.lostBlackPieces = prevBoard.lostBlackPieces;
	newBoard.lostWhitePieces = prevBoard.lostWhitePieces;
	return newBoard;
};
