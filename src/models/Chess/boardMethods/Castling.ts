import { Board } from "../Board";
import { FindPiece } from "./FindPiece";
import { Cell } from "../Cell";

export function Castling(
  target: Cell,
  selectedCell: Cell | null,
  board: Board,
  setSelectedCell: (cell: Cell | null) => void,
  swapPlayers: () => void
  ) {

  const { blackKing, whiteKing } = FindPiece.findKings(board);

  if (
    selectedCell && 
    selectedCell.piece && 
    selectedCell.piece.isFirstStep
    ) {
    if (
      selectedCell === whiteKing && 
      target.x === 7 && 
      (
        target.y === 2 
        || 
        target.y === 6 
      )        
      ) {
      selectedCell.movePiece(target);
      board.castling();
      setSelectedCell(null);
      swapPlayers();
    };   

    if (
      selectedCell === blackKing && 
      target.x === 0 && 
      (
        target.y === 2
        ||
        target.y === 6
      )
      ) {
      selectedCell.movePiece(target);
      board.castling();
      setSelectedCell(null);
      swapPlayers();
    }
  }
}