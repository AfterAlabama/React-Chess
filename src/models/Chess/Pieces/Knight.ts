import { Colors } from "../../../helpers/Colors";
import { Cell } from "../Cell";
import { Piece } from "./Piece";
import blackLogo from "../../../assets/black-knight.png";
import whiteLogo from "../../../assets/white-knight.png";
import { PieceNames } from "../../../helpers/PieceNames";

export class Knight extends Piece {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = PieceNames.KNIGHT;
  };

  public canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    };

    const dy = Math.abs(target.y - this.cell.y);

    const dx = Math.abs(target.x - this.cell.x);

    if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
      return true;
    };

    return false;
  };

  public canProtect(target: Cell) {
    const dy = Math.abs(target.y - this.cell.y);

    const dx = Math.abs(target.x - this.cell.x);

    if (
      target.piece &&
      target.piece.color === this.color 
      &&
      ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
    ) {
      return true;
    };

    return false;
  }
}
