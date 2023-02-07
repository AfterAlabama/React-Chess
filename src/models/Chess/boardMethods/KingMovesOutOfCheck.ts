import { Board } from "../Board";
import { FindPiece } from "./FindPiece";
import { Cell } from "../Cell";
import { CheckForColor } from "./CheckForColor";


export function KingMovesOutOfCheck(
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
      CheckForColor(board, blackKing);
      setSelectedCell(null);
      swapPlayers();
    };

    if (
      selectedCell === whiteKing &&
      whiteKingCheck
    ) {
      selectedCell.movePiece(target);
      CheckForColor(board, whiteKing);
      setSelectedCell(null);
      swapPlayers();
    }
  }
}