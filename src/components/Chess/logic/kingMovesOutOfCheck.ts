import { Board } from "../../../models/Chess/Board";
import { FindPiece } from "../../../models/Chess/boardMethods/FindPiece";
import { Cell } from "../../../models/Chess/Cell";
import { checkForColor } from "./checkForColor";


export function kingMovesOutOfCheck(
  target: Cell,
  board: Board,
  selectedCell: Cell | null,
  setSelectedCell: (cell: Cell | null) => void,
  swapPlayers: () => void
  ) {
    
  const { blackKingCheck, whiteKingCheck } = board.isKingUnderAttack();

  const { blackKing, whiteKing } = FindPiece.findKings(board);

  if (
    selectedCell &&
    selectedCell !== target &&
    selectedCell.piece?.canMove(target)
  ) {
    if (
      selectedCell === blackKing &&
      blackKingCheck
    ) {
      selectedCell.movePiece(target);
      checkForColor(board, blackKing);
      setSelectedCell(null);
      swapPlayers();
    };

    if (
      selectedCell === whiteKing &&
      whiteKingCheck
    ) {
      selectedCell.movePiece(target);
      checkForColor(board, whiteKing);
      setSelectedCell(null);
      swapPlayers();
    }
  }
}