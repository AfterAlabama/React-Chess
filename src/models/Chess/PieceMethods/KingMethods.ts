import { Colors } from "../../../helpers/Enums/Colors";
import { Board } from "../Board";
import { CheckForColor } from "../BoardMethods/CheckForColor";
import { FindPiece } from "../BoardMethods/FindPiece";
import { Cell } from "../Cell";
import { BlockCheck } from "../CellMethods/BlockCheck";
import { IsCellUnderAttack } from "../CellMethods/IsCellUnderAttack";
import { King } from "../Pieces/King";

export class KingMethods {
  static isKingUnderAttack(board: Board) {
    let { blackKing, whiteKing } = FindPiece.findKings(board);

    let whiteKingCheck: boolean = false;
    let blackKingCheck: boolean = false;
    let blackAttacker;
    let whiteAttacker;

    for (let i = 0; i < board.cells.length; i++) {
      const row = board.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];

        if (target.piece && target.piece.attacksKing(blackKing)) {
          blackKingCheck = true;
          blackAttacker = target;
          blackKing.color = Colors.UNDERATTACK;
        }

        if (target.piece && target.piece.attacksKing(whiteKing)) {
          whiteKingCheck = true;
          whiteAttacker = target;
          whiteKing.color = Colors.UNDERATTACK;
        }

        if (!whiteKingCheck) {
          CheckForColor(board, whiteKing);
        }
        if (!blackKingCheck) {
          CheckForColor(board, blackKing);
        }
      }
    }
    return { blackKingCheck, whiteKingCheck, blackAttacker, whiteAttacker };
  }

  static Mate(board: Board, currentColor: Colors) {
    let count = 0;
    const { blackKing, whiteKing } = FindPiece.findKings(board);

    const { whiteKingCheck, blackKingCheck } =
      KingMethods.isKingUnderAttack(board);

    if (whiteKingCheck || blackKingCheck) {
      for (let i = 0; i < board.cells.length; i++) {
        const row = board.cells[i];
        for (let j = 0; j < row.length; j++) {
          const target = row[j];

          for (let x = 0; x < board.cells.length; x++) {
            const row2 = board.cells[x];
            for (let z = 0; z < row2.length; z++) {
              const target2 = row2[z];

              if (
                (whiteKing.piece!.canMove(target) &&
                  !IsCellUnderAttack(board, currentColor, target)) ||
                (target2.piece?.color === whiteKing.piece!.color &&
                  target2.piece?.canMove(target) &&
                  BlockCheck.doesCellBlockTheCheck(target, board, target2)) ||
                (blackKing.piece!.canMove(target) &&
                  !IsCellUnderAttack(board, currentColor, target)) ||
                (target2.piece?.color === blackKing.piece!.color &&
                  target2.piece?.canMove(target) &&
                  BlockCheck.doesCellBlockTheCheck(target, board, target2))
              ) {
                count += 1;
              }
            }
          }
        }
      }
      if (count > 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  static CanKingCastle(king: King, target: Cell) {
    if (king.isFirstStep && target.x === king.cell.x && target.available) {
      if (
        king.color === Colors.WHITE &&
        (target.y === king.cell.y + 2 || target.y === king.cell.y - 2)
      ) {
        return true;
      }

      if (
        king.color === Colors.BLACK &&
        (target.y === king.cell.y + 2 || target.y === king.cell.y - 2)
      ) {
        return true;
      }
    }
  }

  static CanKingMove(king: King, target: Cell) {
    if (
      (target.x === king.cell.x + 1 ||
        target.x === king.cell.x - 1 ||
        target.x === king.cell.x) &&
      (target.y === king.cell.y + 1 ||
        target.y === king.cell.y - 1 ||
        target.y === king.cell.y)
    ) {
      return true;
    }
  }

  static CanKingProtect(king: King, target: Cell) {
    if (
      target.piece &&
      target.piece.color === king.color &&
      (target.x === king.cell.x + 1 ||
        target.x === king.cell.x - 1 ||
        target.x === king.cell.x) &&
      (target.y === king.cell.y + 1 ||
        target.y === king.cell.y - 1 ||
        target.y === king.cell.y)
    ) {
      return true;
    }
  }
}
