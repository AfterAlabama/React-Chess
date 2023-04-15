export function CreateBoard<
	BOARD extends {
		initCells: () => void;
		addPieces: () => void;
	}
>(board: { new (): BOARD }) {
	const newBoard = new board();
	newBoard.initCells();
	newBoard.addPieces();
	return newBoard;
}
