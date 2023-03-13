import { Board } from '../../Board';

export function CreateBoard(): Board {
	const newBoard = new Board();
	newBoard.initCells();
	newBoard.addPieces();
	return newBoard;
}
