export const GetCopyBoardLogic = <
	T extends {
		cells: C[][];
		lostBlackPieces?: P[];
		lostWhitePieces?: P[];
	},
	C,
	P
>(
	prevBoard: T,
	nextBoard: {
		new (): T;
	}
): T => {
	const newBoard = new nextBoard();
	newBoard.cells = prevBoard.cells;
	newBoard.lostBlackPieces = prevBoard.lostBlackPieces;
	newBoard.lostWhitePieces = prevBoard.lostWhitePieces;
	return newBoard;
};
