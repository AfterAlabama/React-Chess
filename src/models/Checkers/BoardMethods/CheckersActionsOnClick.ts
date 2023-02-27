import { ChBoard } from "../ChBoard";
import { ChCell } from "../ChCell";
import { CheckerAttack } from "./CheckerAttack";

export class CheckersActionsOnClick {
  static OrdinaryMoves(
    selectedChCell: ChCell | null,
    target: ChCell,
    chBoard: ChBoard,
    setSelectedChCell: (cell: ChCell | null) => void
  ) {
    if (selectedChCell && target === selectedChCell) {
      setSelectedChCell(null);
    }
    if (
      (!selectedChCell && target.piece) ||
      (selectedChCell &&
        selectedChCell !== target &&
        target.piece &&
        target.piece.color === selectedChCell.piece?.color)
    ) {
      setSelectedChCell(target);
    }

    if (
      selectedChCell &&
      selectedChCell !== target &&
      selectedChCell.piece?.canMove(target)
    ) {
      CheckerAttack(selectedChCell, chBoard, target);

      selectedChCell.movePiece(target);
      setSelectedChCell(null);
    }
  }
}
