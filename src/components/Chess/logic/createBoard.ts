import { Board } from "../../../models/Chess/Board";

export function createBoard(
  setBoard: (board: Board) => void
  ){
  const newBoard = new Board();
  newBoard.initCells();
  newBoard.addPieces();
  setBoard(newBoard);
}