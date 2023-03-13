import { Board } from '../../Board';

export const GetCopyBoardLogic = (board: Board): Board => {
	const newBoard = new Board();
	newBoard.cells = board.cells;
	newBoard.lostBlackPieces = board.lostBlackPieces;
	newBoard.lostWhitePieces = board.lostWhitePieces;
	return newBoard;
};
