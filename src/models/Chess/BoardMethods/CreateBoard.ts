import { Board } from "../Board";

export function CreateBoard(
  setBoard: (board: Board) => void
  ){
  const newBoard = new Board();
  newBoard.initCells();
  newBoard.addPieces();
  setBoard(newBoard);
}