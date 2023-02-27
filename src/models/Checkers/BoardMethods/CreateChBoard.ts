import { ChBoard } from "../ChBoard";

export function CreateChBoard(setChBoard: (board: ChBoard) => void) {
  const newBoard = new ChBoard();
  newBoard.initCheckersCells();
  newBoard.addChPieces();
  setChBoard(newBoard);
}
