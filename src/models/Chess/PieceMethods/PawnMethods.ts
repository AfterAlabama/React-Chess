import { Colors } from "../../../helpers/Enums/Colors";
import { PieceNames } from "../../../helpers/Enums/PieceNames";
import { Cell } from "../Cell";
import { IsEmpty } from "../CellMethods/IsEmpty";
import { Pawn } from "../Pieces/Pawn";

export class PawnMethods {
  static isCellUnderPawnAttack(cell: Cell, target: Cell) {
    const direction = cell.piece?.color === Colors.BLACK ? 1 : -1;

    if (
      target.x === cell.x + direction &&
      (target.y === cell.y + 1 || target.y === cell.y - 1)
    ) {
      return true;
    }
    return false;
  }

  static CanPawnMove(pawn: Pawn, target: Cell) {
    const direction = pawn.color === Colors.BLACK ? 1 : -1;

    const firstStep = pawn.color === Colors.BLACK ? 2 : -2;

    if (
      pawn.cell.y === target.y &&
      (target.x === pawn.cell.x + direction ||
        (pawn.isFirstStep &&
          target.x === pawn.cell.x + firstStep &&
          (pawn.color === Colors.BLACK
            ? IsEmpty.Cell(pawn.cell.board.getCells(target.y, target.x - 1))
            : IsEmpty.Cell(
                pawn.cell.board.getCells(target.y, target.x + 1)
              )))) &&
      IsEmpty.Cell(pawn.cell.board.getCells(target.y, target.x))
    ) {
      return true;
    }
    return false;
  }

  static isPawnAttack(pawn: Pawn, target: Cell) {
    const direction = pawn.color === Colors.BLACK ? 1 : -1;

    if (
      target.x === pawn.cell.x + direction &&
      (target.y === pawn.cell.y + 1 || target.y === pawn.cell.y - 1) &&
      pawn.cell.isEnemy(target)
    ) {
      return true;
    }
  }

  static CanPawnEnPassant(pawn: Pawn, target: Cell) {
    if (
      pawn.color === Colors.WHITE &&
      pawn.cell.x === 3 &&
      pawn.cell.board.getCells(pawn.cell.y + 1, 3).piece?.name ===
        PieceNames.PAWN &&
      pawn.cell.board.getCells(pawn.cell.y + 1, 3).piece?.color ===
        Colors.BLACK &&
      pawn.cell.board.getCells(pawn.cell.y + 1, 3).piece?.count === 1 &&
      target.x === 2 &&
      target.y === pawn.cell.y + 1
    ) {
      return true;
    }
  }

  static PawnTakesEnPassant(cell: Cell, target: Cell) {
    if (
      cell.piece &&
      cell.piece.name === PieceNames.PAWN &&
      cell.y !== 7 &&
      cell.piece.canMove(cell.board.getCells(cell.y + 1, cell.x - 1)) &&
      IsEmpty.Cell(cell.board.getCells(cell.y + 1, cell.x - 1)) &&
      target.x === cell.x - 1 &&
      target.y === cell.y + 1
    ) {
      cell.board.getCells(cell.y + 1, cell.x - 1).setPiece(cell.piece);

      cell.piece = null;

      cell.addLostPiece(cell.board.getCells(cell.y + 1, cell.x).piece!);

      cell.board.getCells(cell.y + 1, cell.x).piece = null;
    }
  }
}
