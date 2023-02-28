import { Colors } from "../../../helpers/Enums/Colors";
import { ChCell } from "../ChCell";
import { Checker } from "../Pieces/Checker";

// Tells if checkers are allowed to move on cells or not (no action)
export class CheckerMovement {
  static DoesCheckerMove(checker: Checker, target: ChCell) {
    //White Checker
    if (
      checker.color === Colors.WHITE &&
      target.x === checker.cell.x - 1 &&
      (target.y === checker.cell.y - 1 || target.y === checker.cell.y + 1)
    ) {
      return true;
    }
    //Black Checker
    if (
      checker.color === Colors.BLACK &&
      target.x === checker.cell.x + 1 &&
      (target.y === checker.cell.y - 1 || target.y === checker.cell.y + 1)
    ) {
      return true;
    }
    return false;
  }

  static DoesCheckerAttack(checker: Checker, target: ChCell) {
    // White Checker
    if (
      checker.color === Colors.WHITE &&
      checker.cell.x === target.x + 2 &&
      !target.piece
    ) {
      if (
        checker.cell.y === target.y - 2 &&
        checker.cell.board.getCells(target.y - 1, target.x + 1).piece &&
        checker.cell.board.getCells(target.y - 1, target.x + 1).piece?.color !==
          checker.color
      ) {
        return true;
      }
      if (
        checker.cell.y === target.y + 2 &&
        checker.cell.board.getCells(target.y + 1, target.x + 1).piece &&
        checker.cell.board.getCells(target.y + 1, target.x + 1).piece?.color !==
          checker.color
      ) {
        return true;
      }
    }

    // Black Checker
    if (
      checker.color === Colors.BLACK &&
      checker.cell.x === target.x - 2 &&
      !target.piece
    ) {
      if (
        checker.cell.y === target.y - 2 &&
        checker.cell.board.getCells(target.y - 1, target.x - 1).piece &&
        checker.cell.board.getCells(target.y - 1, target.x - 1).piece?.color !==
          checker.color
      ) {
        return true;
      }
      if (
        checker.cell.y === target.y + 2 &&
        checker.cell.board.getCells(target.y + 1, target.x - 1).piece &&
        checker.cell.board.getCells(target.y + 1, target.x - 1).piece?.color !==
          checker.color
      ) {
        return true;
      }
    }
    return false;
  }
}
