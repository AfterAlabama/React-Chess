import { ChBoard } from "../ChBoard";
import { ChCell } from "../ChCell";

//Moves checkers on cells and takes enemy cells (literal action)
export function CheckerAttack(
  selectedChCell: ChCell | null,
  board: ChBoard,
  target: ChCell
) {
  //white checker to the right
  if (
    selectedChCell &&
    selectedChCell.piece &&
    selectedChCell.piece.canMove(target) &&
    selectedChCell.x === target.x + 2 &&
    selectedChCell.y === target.y - 2
  ) {
    selectedChCell.movePiece(target);
    board.getCells(target.y - 1, target.x + 1).piece = null;
  }

  //white checker to the left
  if (
    selectedChCell?.piece?.canMove(target) &&
    selectedChCell.x === target.x + 2 &&
    selectedChCell.y === target.y + 2
  ) {
    selectedChCell.movePiece(target);
    board.getCells(target.y + 1, target.x + 1).piece = null;
  }

  //black checker to the left
  if (
    selectedChCell?.piece?.canMove(target) &&
    selectedChCell.x === target.x - 2 &&
    selectedChCell.y === target.y + 2
  ) {
    selectedChCell.movePiece(target);
    board.getCells(target.y + 1, target.x - 1).piece = null;
  }
  //black checker to the right
  if (
    selectedChCell?.piece?.canMove(target) &&
    selectedChCell.x === target.x - 2 &&
    selectedChCell.y === target.y - 2
  ) {
    selectedChCell.movePiece(target);
    board.getCells(target.y - 1, target.x - 1).piece = null;
  }
}
