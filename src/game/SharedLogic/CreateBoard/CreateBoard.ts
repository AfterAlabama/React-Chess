export function CreateBoard<
	T extends {
		initCells: () => void;
		addPieces: () => void;
	}
>(board: { new (): T }): T {
	const newBoard = new board();
	newBoard.initCells();
	newBoard.addPieces();
	return newBoard;
}
