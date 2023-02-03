import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-pawn.png";
import whiteLogo from "../../../assets/white-pawn.png";
import { PieceNames } from "../../../helpers/PieceNames";

export class Pawn extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.PAWN;
  };

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    };

    if (
      this.color === Colors.WHITE &&
      this.cell.x === 3 
      &&
      this.cell.board.getCells(this.cell.y + 1, 3).piece?.name ===
        PieceNames.PAWN 
      &&
      this.cell.board.getCells(this.cell.y + 1, 3).piece?.color ===
        Colors.BLACK 
      &&
      this.cell.board.getCells(this.cell.y + 1, 3).piece?.count === 1 
      &&
      target.x === 2 
      &&
      target.y === this.cell.y + 1
    ) {
      return true;
    };

    if (this.isPawnMove(target, this.isFirstStep)) {
      return true;
    };

    if (this.isPawnAttack(target)) {
      return true;
    };

    return false;
  };

  private isPawnMove(target: Cell, isFirstStep: boolean) {
    const direction = this.color === Colors.BLACK ? 1 : -1;

    const firstStep = this.color === Colors.BLACK ? 2 : -2;

    if (
      this.cell.y === target.y 
      &&
      (target.x === this.cell.x + direction 
        ||
        (isFirstStep 
          &&
         target.x === this.cell.x + firstStep 
          &&
          (this.color === Colors.BLACK
            ? 
            this.cell.board.getCells(target.y, target.x - 1).isEmpty()
            : 
            this.cell.board.getCells(target.y, target.x + 1).isEmpty()))) 
      &&
      this.cell.board.getCells(target.y, target.x).isEmpty()
    ) {
      return true;
    }
    return false;
  };

  private isPawnAttack(target: Cell) {
    const direction = this.color === Colors.BLACK ? 1 : -1;

    if (
      target.x === this.cell.x + direction &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }
  };

  public movePiece(target: Cell) {
    this.isFirstStep = false;
    this.count += 1;
  }
}
