import { Cell } from "../Cell";
import { Knight } from "../Pieces/Knight";

export class KnightMethods {
  static CanKnightMove(
    knight: Knight,
    target: Cell
  ){
    const dy = Math.abs(target.y - knight.cell.y);

    const dx = Math.abs(target.x - knight.cell.x);

    if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
      return true;
    }
  }

  static CanKnightProtect(
    knight: Knight,
    target: Cell
  ){
    const dy = Math.abs(target.y - knight.cell.y);

    const dx = Math.abs(target.x - knight.cell.x);

    if (
      target.piece &&
      target.piece.color === knight.color &&
      ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
    ) {
      return true;
    }
  }
}