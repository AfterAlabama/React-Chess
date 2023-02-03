import { Cell } from "../../../models/Chess/Cell";
import { Player } from "../../../models/Chess/Player";

export function otherMoves (
  selectedCell: Cell | null,
  target: Cell,
  setSelectedCell: (cell: Cell | null) => void,
  currentPlayer: Player
){
  if (
    !selectedCell ||
    target.piece?.color === selectedCell?.piece?.color
  ) {
    setSelectedCell(target);
  };

  if (
    selectedCell === target ||
    !target.piece ||
    target.piece?.color !== currentPlayer?.color
  ) {
    setSelectedCell(null);
  }
}